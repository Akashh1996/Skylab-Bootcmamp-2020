const { Router } = require('express');
const dashboardController = require('../controllers/dashboardController');

function heroRouter(Hero) {
  const router = Router();

  const dashboard = dashboardController(Hero);

  router.route('/')
    .get(dashboard.getMethod);

  return router;
}

module.exports = heroRouter;
