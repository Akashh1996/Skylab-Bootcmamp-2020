const express = require('express');
const CountriesController = require('../controllers/CountriesController');

function countriesRouter(Countries) {
  const router = express.Router();
  const countries = CountriesController(Countries);

  router.route('/')
    .get(countries.getMethod)
    .post(countries.postMethod)
    .put(countries.putMethod)
    .delete(countries.deleteMethod);

  return router;
}

module.exports = countriesRouter;
