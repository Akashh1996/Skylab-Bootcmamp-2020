const { Router } = require('express');
const addressController = require('../controllers/addressController');

function AddressRouter(Address) {
  const router = Router();
  const addressMethods = addressController(Address);

  router.get('/', addressMethods.getMethod);

  router.put('/', addressMethods.putMethod);

  return router;
}

module.exports = AddressRouter;
