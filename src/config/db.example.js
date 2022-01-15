const parseDatabaseUrl = require('../utils/parseDatabaseUrl');
const { NODE_ENV: env, DATABASE_URL } = process.env || '';

const dotenv = require('dotenv');
dotenv.config();

let data = {};

if (env === 'production') {
  const config = parseDatabaseUrl(DATABASE_URL);
  data[`${env}`] = config;
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
    user: 'mac',
    password: 'password',
    port: '5432'
  },
  development: {
    host: 'localhost',
    database: 'county_dev',
    user: 'mac',
    password: 'password',
    port: '5432'
  },
  ...data
};
