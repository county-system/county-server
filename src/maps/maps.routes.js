const Router = require("koa-router");
const controller = require("./maps.controller");

const users = new Router();

users.get("/", controller.getMaps);


module.exports = users.routes();
