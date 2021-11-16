const express = require('express');
const visitorRoute = require('./visitor.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/visitors',
    route: visitorRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
