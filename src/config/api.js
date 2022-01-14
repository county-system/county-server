const { version } = require('../../package.json');
const env = process.env.NODE_ENV || 'development';

module.exports = { version, env };
