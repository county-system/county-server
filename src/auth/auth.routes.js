const Router = require("koa-router");
const controller = require("./auth.controller");
const validateAuthRoutes = require("../middleware/validateRoutePostSchema/validateAuthRoutes");
const checkIfPasswordAreSame = require("../utils/routesUtils/authRouteUtils");

const auth = new Router();

auth.post("/login",validateAuthRoutes.validateUserLogin, controller.login);
auth.post("/reset_password", checkIfPasswordAreSame, controller.resetPassword);
auth.post("/forgot_password", checkIfPasswordAreSame, controller.forgotPassword);

module.exports = auth.routes();
