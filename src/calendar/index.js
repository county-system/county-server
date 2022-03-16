const controller = require("./calendar.controller");
const API =  require("./calendar.routes");

const calendar = {
  API,
  controller,
};
module.exports = calendar;