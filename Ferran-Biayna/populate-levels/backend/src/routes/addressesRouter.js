const express = require('express');
const AdressesController = require('../controllers/AddressesController');

function adressesRouter(Adresses) {
  const router = express.Router();
  const adresses = AdressesController(Adresses);

  router.route('/')
    .get(adresses.getMethod)
    .post(adresses.postMethod)
    .put(adresses.putMethod)
    .delete(adresses.deleteMethod);

  return router;
}

module.exports = adressesRouter;
