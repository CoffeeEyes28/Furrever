const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const testRoutes = require('./testRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/test', testRoutes);

module.exports = router;