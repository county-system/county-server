const controller = require('./users.controller');
const API =  require('./users.routes');

const users = {
  API,
  controller,
};
module.exports = users;