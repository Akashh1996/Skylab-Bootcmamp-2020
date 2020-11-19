const { Router } = require('express');
const addressController = require('../controllers/addressController');

function addressRouter(addressSchema) {
  const router = Router();
  const controller = addressController(addressSchema);

  router.route('/')
    .get(controller.getAddressesMethod)
    .post(controller.postAddressesMethod);

  return router;
}

module.exports = addressRouter;
