const { Router } = require('express');

function AddressRouter(Address) {
  const router = Router();

  router.get('/', (req, res) => {
    const query = {};
    Address.find(query, (errorFindAddress, addresses) => {
      if (errorFindAddress) {
        res.send(errorFindAddress);
      }

      res.json(addresses);
    });
  });

  router.put('/', (req, res) => {
    const address = new Address(req.body);
    address.save((error, addressSaved) => (error ? res.send(error) : res.json(addressSaved)));
  });

  return router;
}

module.exports = AddressRouter;
