const { Router } = require('express');

const addressController = require('../controllers/addressController');

function addressRouter(Address) {
  const router = Router();
  const addresses = addressController(Address);

  router.route('/')
    .get(addresses.getMethod)
    .put(addresses.putMethod);
  return router;
}

module.exports = addressRouter;
