const { Router } = require('express');

const countryController = require('../controllers/countryController');

function countryRouter(Country) {
  const router = Router();
  const country = countryController(Country);

  router.route('/')
    .get(country.getMethod)
    .put(country.putMethod);
  return router;
}

module.exports = countryRouter;
