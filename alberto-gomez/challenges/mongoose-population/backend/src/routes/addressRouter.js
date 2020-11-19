const express = require('express');

const router = express.Router();

function AddressRouter(Address) {
  router.get('/', (req, res) => {
    const query = {};
    Address.find(query, (error, addresses) => (
      error
        ? res.send(error)
        : res.json(addresses)
    ));
  });

  router.put('/', (req, res) => {
    const address = new Address(req.body);
    address.save((error, addressSaved) => (
      error
        ? res.send(error)
        : res.json(addressSaved)
    ));
  });

  return router;
}

module.exports = AddressRouter;
