const { Router } = require('express');
const heroController = require('../controllers/heroController');
const heroesController = require('../controllers/heroesController');

function heroRouter(Hero) {
  const router = Router();

  const hero = heroController(Hero);
  const heroes = heroesController(Hero);

  router.route('/')
    .get(heroes.getMethod);

  router.route('/hero/:heroId')
    .get(hero.getMethod);

  return router;
}

module.exports = heroRouter;
