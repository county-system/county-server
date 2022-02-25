const path = require('path');

const { nanoid } = require('nanoid/async');
const sharp = require('sharp');
const crypto = require('crypto');

const User = require('../models/user');
const mailer = require('../utils/sendMailMessage');
const knex = require('../utils/knexUtil');
const log = require('../utils/logger');
const s3 = require('../utils/s3Util');
const { getProfileImage } = require('../utils/routesUtils/userRouteUtils');

const DOMAIN_NAME = process.env.DOMAIN_NAME || 'http://localhost:4200';

const sendVerificationEmail = async (user, email) => {
  const token = crypto.randomBytes(64).toString('hex');
  const buf = Buffer.from(email, 'ascii').toString('base64');

  const userData = await user.$query().patchAndFetch({
    'resetPasswordExpires': new Date(+new Date() + 1.8e6),
    'resetPasswordToken': token,
  });
    // sending email
  const link = `${DOMAIN_NAME}/verify?email=${buf}&token=${token}`;

  await mailer.mg
    .messages()
    .send(
      mailer.registrationEmailData(
        buf,
        userData.username,
        link,
        'email_verification',
        'Welcome to Wikonnect! Please confirm your email'
      )
    );

  // await sendMailMessage(buf, userData.username, link, 'email_verification', 'Welcome to Wikonnect! Please confirm your email');
  log.info('Email verification sent to %s', email);

  return userData;
};


/**
* @api {post} /api/v1/users POST create a new user.
* @apiName PostAUser
* @apiGroup Authentication
*
* @apiParam {string} user[username] username
* @apiParam {string} user[email] Unique email
* @apiParam {string} user[password] validated password
* @apiParam {string} user[invitedBy] optional auto filled on the form
*
* @apiPermission none
*
* @apiSuccessExample {json} Success-Response:
*     HTTP/1.1 201 OK
*     {
*        "user": {
*          "id": "string",
*          "username": "string",
*          "inviteCode": "inviteCode",
*          "createdAt": "string",
*          "updatedAt": "string",
*          "metadata": "json_array"
*        }
*     }
*
* @apiError {String} errors Bad Request.
*/

async function createUser(ctx) {
  ctx.request.body.user.username = ctx.request.body.user.username.toLowerCase();
  ctx.request.body.user.email = ctx.request.body.user.email.toLowerCase();
  ctx.request.body.user.metadata = { 'profileComplete': 'false', 'oneInviteComplete': 'false' };

  const invitedBy = ctx.request.body.user.inviteCode;

  let newUser = ctx.request.body.user;
  newUser.inviteCode = await nanoid(11);
  newUser.lastIp = ctx.request.ip;

  const userCheck = await User.query();
  let role = !userCheck.length ? 'groupAdmin' : 'groupBasic';

  delete newUser.profileUri; //avoids external profile links at the moment

  try {
    const user = await User.query().insertAndFetch(newUser);
    await knex('group_members').insert({ 'user_id': user.id, 'group_id': role });
    await knex('user_invite').insert([{ 'invited_by': invitedBy, user_id: user.id }], ['id', 'invited_by', 'user_id']);

    log.info('Created a user with id %s with username %s with the invite code %s', user.id, user.username, user.inviteCode);
    sendVerificationEmail(user, ctx.request.body.user.email);

    ctx.status = 201;
    ctx.body = { user };
  } catch (e) {
    log.error('Failed for user - %s, with error %s', ctx.request.body.user.email, e.message, e.detail);
    ctx.throw(400, null, { errors: [e] });
  }
}


/**
 * @api {get} /api/v1/users/:id GET a single user using id.
 * @apiName GetAUser
 * @apiGroup Authentication
 *
 * @apiVersion 0.4.0
 * @apiDescription list a single user on the platform
 * @apiPermission [admin, superadmin]
 * @apiHeader {String} authorization Users unique JWT
 *
 * @apiParam {string} id The users id
 *
 * @apiSampleRequest https://localhost:3000/api/v1/users
 *
 * @apiSuccess {String} id Unique user id
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "user": {
 *       "id": "user2",
 *       "username": "user2",
 *       "createdAt": "2017-12-20T16:17:10.000Z",
 *       "updatedAt": "2017-12-20T16:17:10.000Z",
 *       "profileUri": "image_url",
 *       "flag": false,
 *       "private": boolean,
 *       "inviteCode": "invited_by",
 *       "userRoles": [
 *         {
 *           "id": "4hsuh4"
 *           "type": "userRole"
 *         }
 *       ],
 *       "userVerification": []
 *    }
 * }
 *
 * @apiErrorExample
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "status": 401,
 *      "message": "You do not have permissions to view that user"
 *    }
 *
 * @apiErrorExample
 *    HTTP/1.1 404 Not Found
 *    {
 *      "status": 404,
 *      "message": "No User With that Id"
 *    }
 */

async function getUserById(ctx) {

  let stateUserId = ctx.state.user.id === undefined ? ctx.state.user.data.id : ctx.state.user.id;

  let userId = (ctx.params.id !== 'current' || ctx.params.id !== 'me') ? ctx.params.id : stateUserId;

  let user = await User.query()
    .select('*')
    .findById(userId)
    .withGraphFetched('[userRoles(selectNameAndId)]');

  ctx.assert(user, 404, 'No User With that Id');
  user.profileUri = await getProfileImage(user);
  log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);


  user = user.toJSON();
  if (stateUserId !== userId) {
    delete user.email;
    delete user.username;
    delete user.updatedAt;
    delete user.contactNumber;
  }
  log.info(user);

  ctx.status = 200;
  ctx.body = { user };
}

async function getUsers(ctx) {
  let { page, per_page } = ctx.query;

  delete ctx.query.page;
  delete ctx.query.per_page;
  delete ctx.query.followerId;
  delete ctx.query.aggregate;
  delete ctx.query.include;

  try {
    let users = await User.query()
      .select('*')
      .where(ctx.query)
      .withGraphFetched('[userRoles()]')
      .page(page, per_page);

    ctx.assert(users, 404, 'No User With that username');


    //for each user, get their profile image
    const promises = users.results.map(async (user) => {
      user.profileUri = await getProfileImage(user);
      return user;
    });
    const userProfiles = await Promise.all(promises);
    //replace user profile images with correct ones
    userProfiles.map((profile) => {
      const obj = users.results.find((p) => p.id === profile.id);
      if (obj) {
        obj.profileUri = profile.profileUri;
      }
    });

    log.info(`users.results: ${users.results.length}`);
    ctx.body = {
      meta: {
        total_pages: users.total / per_page
      },
      users: users.results
    };
  } catch (e) {
    if (e.statusCode) {
      ctx.throw(e.statusCode, { message: 'The query key does not exist' });
    } else { ctx.throw(406, null, { errors: [e.message] }); }
  }

}


async function updateUserById(ctx) {
  let { metadata, ...data } = ctx.request.body.user;

  //  update json_b metadata without deleting existing content
  if (metadata) {
    for (let key in metadata) {
      data[`metadata:${key}`] = metadata[key];
    }
  }

  delete data.profileUri; //avoids external profile links at the moment

  const user = await User.query().patchAndFetchById(ctx.params.id, data);
  ctx.assert(user, 404, 'That user does not exist.');

  ctx.status = 200;
  ctx.body = { user };

}

async function storeInviteId(ctx) {
  const invite = await knex('user_invite').insert([{ user_id: ctx.params.id, 'invited_by': ctx.request.body.user.inviteBy }], ['id', 'invited_by', 'user_id']);
  ctx.assert(invite, 404, 'That user does not exist.');

  ctx.status = 200;
  ctx.body = { invite };

}

/**
 * @api {post} /users/:id/profile-image POST users profile picture.
 * @apiName PostAUser
 * @apiGroup Authentication
 *
 * @apiVersion 0.4.0
 * @apiDescription upload user profile pic
 * @apiPermission [basic, admin, superadmin]
 * @apiHeader (Header) {String} authorization Bearer <<YOUR_API_KEY_HERE>>
 *
 *
 * @apiError {String} errors Bad Request.
 */

async function uploadProfileImage(ctx) {

  ctx.assert(ctx.request.files.file, 400, 'No file image uploaded');

  const fileNameBase = await nanoid(11);
  const uploadPath = 'uploads/images/profile';
  const uploadDir = path.resolve(__dirname, '../public/' + uploadPath);

  const { file } = ctx.request.files;

  const fileExtension = path.extname(file.name);

  if (!['.webp', '.svg', '.png', '.jpeg', '.gif', '.avif', '.jpg'].includes(fileExtension)) {
    ctx.throw(400, { error: 'Image format not supported' });
  }

  let resizer;
  try {
    resizer = await sharp(file.path)
      .resize(500, 500)
      .jpeg({ quality: 70 });
  } catch (e) {
    if (e.statusCode) {
      ctx.throw(e.statusCode, null, { errors: [e.message] });
    } else {
      ctx.throw(500, null, { errors: [e.message] });
    }
  }


  if (s3.config) {
    let buffer = await resizer.toBuffer();
    const params = {
      Bucket: s3.config.bucket, // pass your bucket name
      Key: `uploads/profiles/${fileNameBase}.jpg`, // key for saving filename
      Body: buffer, //image to be uploaded
    };

    try {
      //Upload image to AWS S3 bucket
      const uploaded = await s3.s3.upload(params).promise();
      log.info('Uploaded in:', uploaded.Location);
      const user = await User.query().patchAndFetchById(ctx.params.id, { profileUri: fileNameBase });

      user.profileUri = 'data:image/(png|jpg);base64,' + buffer.toString('base64'); //since s3 will not alter the image

      ctx.body = { user };
    } catch (e) {
      log.error(e);
      ctx.throw(e.statusCode, null, { message: e.message });
    }
  }

  else {
    try {
      await resizer.toFile(`${uploadDir}/${fileNameBase}.jpg`);
      const user = await User.query()
        .patchAndFetchById(ctx.params.id, { profileUri: `/${uploadPath}/${fileNameBase}.jpg` });

      ctx.status = 200;
      ctx.body = { user };
    } catch (e) {
      if (e.statusCode) {
        ctx.throw(e.statusCode, null, { errors: [e.message] });
      } else {
        ctx.throw(400, null, { errors: [e.message] });
      }
    }
  }
}

/**
 * @api {post} /api/v1/users/verify POST user's email to validate.
 * @apiName PostLoginAUserEmail
 * @apiGroup Authentication
 *
 * @apiParam {string} user[email] emailAddress
 *
 * @apiPermission basic
 * @apiSampleRequest https://localhost:3000/api/v1/users/verify
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "user":{
 *          "email": "emailAddress",
 *          "emailVerified": "true",
 *        }
 *     }
 *
 * @apiError {String} errors Bad Request.
 */

async function sendVerification(ctx) {
  const email = ctx.request.body.user.email;
  const user = await User.query().findOne({ 'email': email, 'emailVerified': false });
  ctx.assert(user, 404, user);

  try {
    const userData = sendVerificationEmail(user, email);
    ctx.status = 201;
    ctx.body = userData;

  } catch (e) {
    log.info('Email verification already requested');
    if (e.statusCode) {
      ctx.throw(e.statusCode, e, { errors: [e.message] });
    } else { ctx.throw(400, e, { errors: [e.message] }); }
    throw e;
  }
}

/**
 * @api {get} /api/v1/users/verify Validate a users email.
 * @apiName ValidateAUsersEmail
 * @apiGroup Authentication
 *
 * @apiVersion 0.4.0
 * @apiDescription Validate a users email using token sent via email
 * @apiPermission [admin, superadmin]
 * @apiHeader (Header) {String} authorization Bearer <<YOUR_API_KEY_HERE>>
 *
 * @apiParam (Required Params) {string} user[token] username
 * @apiParam (Required Params) {string} user[email] Unique email
 *
 */

async function verifyEmail(ctx) {
  const decodedMail = Buffer.from(ctx.query.email, 'base64').toString('ascii');
  const token = ctx.query.token;
  let user = await User.query().findOne({ 'email': decodedMail, 'resetPasswordToken': token });
  ctx.assert(user, 404, 'No email found');
  let verifiedData;
  if (new Date() < user.resetPasswordExpires) {
    try {
      verifiedData = await user.$query().patchAndFetch({
        'emailVerified': true,
        'resetPasswordExpires': new Date(),
        'resetPasswordToken': null
      });
      ctx.status = 200;
      ctx.body = { verifiedData };
    } catch (e) {
      if (e.statusCode) {
        ctx.throw(e.statusCode, e, { errors: [e.message] });
      } else { ctx.throw(400, e, { errors: [e.message] }); }
      throw e;
    }

  } else {
    log.info('Email verification has expired');
    throw new Error('Email verification has expired');
  }

}

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUserById,
  uploadProfileImage,
  sendVerification,
  verifyEmail,
  storeInviteId
};
