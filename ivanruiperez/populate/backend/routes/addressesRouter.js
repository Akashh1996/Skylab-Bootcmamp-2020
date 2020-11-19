const express = require('express');
const addressesController = require('../controllers/addressesController');

function populateAddressRouter(Address) {
  const addressRouter = express.Router();
  const addresses = addressesController(Address);

  addressRouter.route('/')
    .get(addresses.getMethod)
    .put(addresses.putMethod);

  return addressRouter;
}

module.exports = populateAddressRouter;
