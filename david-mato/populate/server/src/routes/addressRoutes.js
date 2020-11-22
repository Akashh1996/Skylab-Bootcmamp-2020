const { Router } = require('express');
const adressesController = require('../controllers/addressController');

function AddressRouter(Address) {
  const router = Router();
  const addresses = adressesController(Address);

  router.route('/')
    .get(addresses.getMethod)
    .post(addresses.postMethod);

  return router;
}

module.exports = AddressRouter;
