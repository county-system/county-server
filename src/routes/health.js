const Router = require("koa-router");
const health = Router();

health.get("/", ctx => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date()
  };

  ctx.status = 200;
  ctx.body = { data };
});

module.exports = health.routes();
