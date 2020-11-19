const express = require('express');
const countryController = require('../controller/countryController');

function CountryRouter(Country) {
  const router = express.Router();
  const country = countryController(Country);

  router.route('/')
    .get(country.getMethod)
    .put(country.putMethod);

  return router;
}

module.exports = CountryRouter;
