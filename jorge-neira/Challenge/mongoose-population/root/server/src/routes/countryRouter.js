const { Router } = require('express');
const countryController = require('../controllers/countriesController');

function countryRouter(Country) {
  const router = Router();
  const country = countryController(Country);

  router.route('/')
    .get(country.getCountryMethod)
    .put(country.putCountryMethod);

  return router;
}

module.exports = countryRouter;
