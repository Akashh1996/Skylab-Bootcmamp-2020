const { Router } = require('express');
const countriesController = require('../controllers/countriesController');

function countriesRouter(Countries) {
  const router = Router();
  const countries = countriesController(Countries);

  router.route('/')
    .get(countries.getMethod)
    .put(countries.putMethod);

  return router;
}

module.exports = countriesRouter;
