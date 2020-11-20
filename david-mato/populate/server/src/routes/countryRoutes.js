const { Router } = require('express');
const countriesController = require('../controllers/countryController');

function CountryRouter(Country) {
  const router = Router();
  const countries = countriesController(Country);

  router.route('/')
    .get(countries.getMethod)
    .post(countries.postMethod);

  return router;
}

module.exports = CountryRouter;
