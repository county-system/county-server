const Router = require("koa-router");
const controller = require("./calendar.controller");

const calendar = new Router();
calendar.get("/",  controller.getCalendarEvents);
calendar.get("/:id",  controller.getCalendarEventById);
calendar.post("/", controller.saveNewCalendarEvent);

module.exports = calendar.routes();
