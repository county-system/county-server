const fs = require('fs-extra');
const path = require('path');
const { version } = require('./api');
const log = require('../utils/logger');

const swaggerJsdoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  basePath: '/',
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        in: 'header',
        name: 'BACKEND-API-KEY',
        scheme: 'bearer',
        type: 'http'
      }
    }
  },
  info: {
    description: 'Web and Mobile API',
    title: 'Web and Mobile API',
    version,
  },
  openapi: '3.0.0',
};

const options = {
  swaggerDefinition,
  apis: ['./src/**/*.js'], // files containing annotations as above
};

log.info('Generating swagger documentation...');
const swaggerJSON = swaggerJsdoc(options);
// module.exports = swaggerJSON;


// Creates swagger.json
const swaggerPath = path.join(__dirname, '../shared/swagger.json');
log.info('Writing swagger.json to:', swaggerPath);
fs.pathExists(swaggerPath)
  .then(async (exists) => {
    if (exists) {
      return await fs.remove(swaggerPath);
    }
    return true;
  })
  .then(() => {
    fs.ensureFile(swaggerPath)
      .then(() => {
        fs.writeFile(path.join(swaggerPath), JSON.stringify(swaggerJSON, null, 4));
      });
  });


