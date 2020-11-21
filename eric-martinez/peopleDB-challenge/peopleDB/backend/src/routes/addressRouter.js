const { Router } = require('express');
const addressController = require('../controllers/addressController');

function addressRouter(Address) {
  const router = Router();
  const address = addressController(Address);

  router.route('/')
    .get(address.getMethod)
    .put(address.putMethod);
  return router;
}

module.exports = addressRouter;
