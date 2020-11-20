const { Router } = require('express');
const countryController = require('../controllers/countryController');

function CountryRouter(Country) {
  const router = Router();
  const countryMethods = countryController(Country);

  router.get('/', countryMethods.getMethod);

  router.put('/', countryMethods.putMethod);

  return router;
}

module.exports = CountryRouter;
