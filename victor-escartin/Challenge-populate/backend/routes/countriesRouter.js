const express = require('express');
const countriesController = require('../controllers/countriesController');

function populateCountryRouter(Country) {
  const countryRouter = express.Router();
  const countries = countriesController(Country);

  countryRouter.route('/')
    .get(countries.getMethod)
    .put(countries.putMethod);

  return countryRouter;
}

module.exports = populateCountryRouter;