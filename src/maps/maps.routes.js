const Router = require("koa-router");
const controller = require("./maps.controller");
const { requireAuth, grantAccess } = require("../middleware/permController");

const maps = new Router();

maps.get("/", requireAuth, grantAccess("readAny", "private"), controller.getMaps);


module.exports = maps.routes();
