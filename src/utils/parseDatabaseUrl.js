const url = require('url');
/**
 * This is the exported function that parses database URLs.
 *
 * @param {String} databaseUrl the URL to be parsed
 * @return {Object<String, String>} the database configuration; this will
 *     always have the "driver" key pointing to a database driver, and may
 *     have some of the following keys: "host", "port", "user", "password",
 *     "database", "filename"
 */
function parseDatabaseUrl(databaseUrl) {
  const parsedUrl = url.parse(databaseUrl, false, true);
  let config = {};
  config.driver = parsedUrl.protocol.slice(0, -1);
  config.database = parsedUrl.pathname.slice(1);
  config.host = parsedUrl.hostname;
  config.port = parsedUrl.port;
  config.user = parsedUrl.auth.split(':')[0];
  config.password = parsedUrl.auth.split(':')[1];
  return config;
}

module.exports = parseDatabaseUrl;
