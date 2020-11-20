const { Router } = require('express');
const adressesController = require('../controllers/adressesController');

function adressesRouter(Adresses) {
  const router = Router();
  const adresses = adressesController(Adresses);

  router.route('/')
    .get(adresses.getMethod)
    .put(adresses.putMethod);

  return router;
}

module.exports = adressesRouter;
