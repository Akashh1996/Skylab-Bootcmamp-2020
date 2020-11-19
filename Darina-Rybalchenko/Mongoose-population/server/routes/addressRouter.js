const { Router } = require('express');

function addressRouter(Address) {
  const router = Router();
  router.get('/', (req, res) => {
    const query = {};
    Address.find(query, (errorCreate, addresses) => {
      if (errorCreate) {
        res.send(errorCreate);
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

module.exports = addressRouter;
