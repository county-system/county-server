const koaBody = require('koa-body')({ multipart: true, multiples: false, keepExtensions: true });
const Router = require('koa-router');
const controller = require('./users.controller');
const validateAuthRoutes = require('../middleware/validateRoutePostSchema/validateAuthRoutes');
const permController = require('../middleware/permController');
const jwt = require('../middleware/jwt');
const { createPasswordHash } = require('../utils/routesUtils/userRouteUtils');

const users = new Router();

users.post('/', validateAuthRoutes.validateNewUser, createPasswordHash, controller.getUsers);
users.get('/:id', controller.getUserById);
users.get('/', permController.requireAuth, permController.grantAccess('readAny', 'private'), controller.getUsers);
users.put('/:id', jwt.authenticate, permController.requireAuth, controller.updateUserById);
users.post('/invite/:id', jwt.authenticate, permController.requireAuth, controller.storeInviteId);
users.post('/:id/profile-image', koaBody, permController.requireAuth, controller.uploadProfileImage);
users.post('/verify', permController.requireAuth, controller.sendVerification);
users.get('/:id/verify', permController.requireAuth, controller.verifyEmail);

module.exports = users.routes();
