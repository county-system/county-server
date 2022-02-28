const Router = require('koa-router');
const jwt = require('../middleware/jwt');
const auth = require('../auth');
const users = require('../users');
const calendar = require('../calendar');
const { env } = require('../config/api');

const router = new Router({
  prefix: '/api/v2'
});

router.use('/auth', auth.API);
router.use('/users', users.API);
router.use('/calendars', calendar.API);
// router.use(require('../users'));
router.use(jwt.authenticate, require('../user_role'));
router.use(jwt.authenticate, require('../groups'));
router.use(require('../search'));

if (env === 'development' || env === 'localhost') {
  router.get('/swagger.json', (ctx) => {
    // ctx.setHeader('Content-Type', 'application/json');
    ctx.body = JSON.stringify(require('../shared/swagger.json'));
  });
}


module.exports = router.routes();