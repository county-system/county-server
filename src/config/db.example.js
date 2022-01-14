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
  production: {
    host: 'localhost',
    database: 'county',
    user: 'mac',
    password: 'password',
    port: '5432'
  }
};
