const { Router } = require('express');
const countryController = require('../controllers/countryController');

function countryRouter(Country) {
  const router = Router();
  const countries = countryController(Country);

  router.route('/')
    .get(countries.getMethod)
    .put(countries.putMethod);
  return router;
}

module.exports = countryRouter;
