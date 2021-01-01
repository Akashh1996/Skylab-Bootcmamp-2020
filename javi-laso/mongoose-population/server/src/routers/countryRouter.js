const { Router } = require('express');
const countryController = require('../controllers/countryController');

function countryRouter(countrySchema) {
  const router = Router();
  const controller = countryController(countrySchema);

  router.route('/')
    .get(controller.getCountriesMethod)
    .post(controller.postCountriesMethod);

  return router;
}

module.exports = countryRouter;
