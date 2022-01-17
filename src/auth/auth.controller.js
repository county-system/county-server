const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../models/user');
const log = require('../utils/logger');
const mailer = require('../utils/sendMailMessage');
const { secret } = require('../middleware/jwt');

const DOMAIN_NAME = process.env.DOMAIN_NAME || 'http://localhost:4200';


/**
	* @swagger
	* /api/v2/auth/login:
	*   post:
	*     tags:
	*       - Auth
	*     description: Get Users API Token
	*     produces:
	*       - application/json
	*     requestBody:
	*       content:
	*          application/json:
	*            schema:
	*              type: object
	*              properties:
	*                username:
	*                 type: string
	*                password:
	*                 type: string
	*     responses:
	*       200:
	*         description: Information fetched successfully
	*/

async function login(ctx) {
  const username = ctx.request.body.username.toLowerCase();

  let user = await User.query().where('username', username);
  if (!user.length) ctx.throw(404, null, { errors: [{ 'name': 'Wrong username or password', 'constraint': 'errors', }] });

  let { hash: hashPassword, ...userInfoWithoutPassword } = user[0];
  user = user[0];

  const userData = await user.$query().findById(user.id).withGraphFetched('userRoles(selectNameAndId)');

  let role = userData['userRoles'][0] !== undefined ? userData['userRoles'][0].name : 'basic';
  userInfoWithoutPassword['role'] = role;

  if (await bcrypt.compare(ctx.request.body.password, hashPassword)) {
    await user
      .$query()
      .findById(user.id)
      .patch({ lastSeen: new Date(+new Date()) });

    ctx.body = {
      token: jsonwebtoken.sign({
        data: userInfoWithoutPassword,
        exp: Math.floor(Date.now() / 1000 + 604800) // 60 seconds * 60 minutes * 24 hours * 7 days = 1 week
      }, secret)
    };
  } else {
    log.error('Wrong email or password from %s for %s', ctx.request.ip, ctx.path);
    ctx.throw(404, null, {
      errors: [{
        'name': 'Wrong username or password',
        'constraint': 'errors',
      }]
    });
  }
}


async function forgotPassword(ctx) {
  const email = ctx.request.body.auth.email;
  const user = await User.query().findOne({ 'email': email });
  ctx.assert(user, 404, user);

  try {
    const token = crypto.randomBytes(64).toString('hex');
    const buf = Buffer.from(email, 'ascii').toString('base64');

    const userData = await user.$query().patchAndFetch({
      'resetPasswordExpires': new Date(+new Date() + 1.8e6),
      'resetPasswordToken': token,
    });
    // sending email
    const link = `${DOMAIN_NAME}/reset_password?email=${buf}&token=${token}`;

    await mailer.mg
      .messages()
      .send(
        mailer.passwordResetEmailData(
          buf,
          userData.username,
          link,
          'forgot_password',
          'Password help has arrived!'
        )
      );
    // await sendMailMessage(buf, userData.username, link, 'forgot_password', 'Password help has arrived!');
    log.info('Password reset email sent to %s', email);

    ctx.status = 201;
    // ctx.body = userData;
    ctx.body = {};

  } catch (e) {
    log.info('Email verification already requested');
    if (e.statusCode) {
      ctx.throw(e.statusCode, e, { errors: [e.message] });
    } else { ctx.throw(400, e, { errors: [e.message] }); }
    throw e;
  }
}


async function resetPassword(ctx) {
  const auth = ctx.request.body.auth;
  const decodedMail = Buffer.from(auth.email, 'base64').toString('ascii');

  const user = await User.query().findOne(
    {
      reset_password_token: auth.token,
      email: decodedMail,
    }
  );
  const tokenExpiryTime = Date.parse(user.resetPasswordExpires);
  ctx.assert(user, 404, 'Account not found');
  ctx.assert(tokenExpiryTime > Date.now(), 400, 'Reset password token has expired');

  try {
    const userData = await user.$query().patchAndFetch({ 'resetPasswordExpires': new Date(), 'hash': auth.hash });

    await mailer.mg
      .messages()
      .send(
        mailer.passwordResetSuccessEmailData(
          decodedMail,
          userData.username,
          'password_reset_success',
          'Your Wikonnect Password Has Been Reset Successfully'
        )
      );
    // await sendMailMessage(userData.username, 'password_reset_success', 'Password Reset Successfully');
    log.info('Password changed for user with email: %s', decodedMail);

    ctx.status = 201;
    ctx.body = {};

  } catch (e) {
    log.info('Passwords do not match');
    if (e.statusCode) {
      ctx.throw(e.statusCode, e, { errors: [e.message] });
    } else { ctx.throw(400, e, { errors: [e.message] }); }
    throw e;
  }
}

module.exports = {
  login,
  forgotPassword,
  resetPassword
};
