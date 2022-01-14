const controller = require('./auth.controller');
const API =  require('./auth.routes');

const auth = {
  API,
  controller,
};
module.exports = auth;