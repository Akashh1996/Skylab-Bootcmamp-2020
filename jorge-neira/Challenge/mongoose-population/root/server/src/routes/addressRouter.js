const { Router } = require('express');
const addressController = require('../controllers/addressesController');

function addressRouter(Address) {
  const router = Router();
  const address = addressController(Address);

  router.route('/')
    .get(address.getAddressMethod)
    .put(address.putAddressMethod);

  return router;
}

module.exports = addressRouter;
