const { Router } = require('express');
const heroController = require('../controllers/heroController');
const heroesController = require('../controllers/heroesController');

function heroRouter(Hero) {
  const router = Router();

  const hero = heroController(Hero);
  const heroes = heroesController(Hero);

  router.route('/')
    .get(heroes.getMethod)
    .put(heroes.putMethod);

  router.route('/:heroId')
    .get(hero.getMethod)
    .post(hero.postMethod)
    .delete(hero.deleteMethod);

  return router;
}

module.exports = heroRouter;
