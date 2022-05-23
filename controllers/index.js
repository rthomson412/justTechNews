const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  console.log("this is the 404 route")
  res.status(404).end();
});

module.exports = router;
