const express = require('express');
const addressController = require('../controller/addressController');

function AddressRouter(Address) {
  const router = express.Router();
  const address = addressController(Address);

  router.route('/')
    .get(address.getMethod)
    .put(address.putMethod);

  return router;
}

module.exports = AddressRouter;
