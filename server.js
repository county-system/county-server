const Koa = require('koa');
const path = require('path');
const koaQs = require('koa-qs');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./src/middleware/error');
const logger = require('./src/middleware/logger');
const cors = require('@koa/cors');

const { koaSwagger } = require('koa2-swagger-ui');

const apiRouter = require('./src/routes/api');
const healthRouter = require('./src/routes/health');

const app = new Koa();

koaQs(app);

app.use(cors({
  origin: '*',
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With', 'Access-Control-Allow-Origin'],
}));

app.use(errorHandler);
app.use(logger);
app.use(bodyParser());

app.use(require('koa-static')(path.resolve(__dirname, './public')));

app.use(apiRouter);
app.use(healthRouter);

app.use(
  koaSwagger({
    // routePrefix: '/do', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: 'http://localhost:3000/api/v2/swagger.json',
    },
  }),
);


module.exports = app;
