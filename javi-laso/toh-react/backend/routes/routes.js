const { Router } = require('express');
const heroController = require('../controllers/heroController');

const heroRoutes = Router();

function routes(superHeroSchema, cartSchema) {
  const hero = heroController(superHeroSchema, cartSchema);

  heroRoutes
    .route('/')
    .get(hero.getMethod);

  heroRoutes
    .route('/cars')
    .get(hero.getCarsMethod);

  return heroRoutes;
}

module.exports = routes;
