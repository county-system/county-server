const parseDatabaseUrl = require('../utils/parseDatabaseUrl');
const { NODE_ENV: env, DATABASE_URL, DATABASE_PASSWORD } = process.env || '';

const dotenv = require('dotenv');
const log = require('../utils/logger');
dotenv.config();

let data = {};

if (env === 'production') {
  const config = parseDatabaseUrl(DATABASE_URL);
  data[`${env}`] = config;
  log.info(`${env} database: ${JSON.stringify(data[`${env}`])}`);
}

module.exports = {
  action: {
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
  },
  test: {
    host: 'localhost',
    database: 'county_test',
    user: 'postgres',
    password: DATABASE_PASSWORD,
    port: '5432'
  },
  development: {
    host: 'localhost',
    database: 'county_dev',
    user: 'postgres',
    password: DATABASE_PASSWORD,
    port: '5432'
  },
  ...data
};
