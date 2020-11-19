const { Router } = require('express');
const countryModel = require('../models/countryModel');

function addressRouter(Address) {
  const router = Router();
  router.get('/', (req, res) => {
    const query = {};
    Address.find(query)
      .populate({
        path: 'country',
        model: countryModel,
      })
      .exec((errorFindAddress, address) => {
        if (errorFindAddress) {
          res.send(errorFindAddress);
        }
        res.json(address);
      });
  });
  router.put('/', (req, res) => {
    const query = req.body;
    Address.create(query, (errorPutAddress, address) => {
      if (errorPutAddress) {
        res.send(errorPutAddress);
      }
      res.json(address);
    });
  });

  router.delete('/:id', (req, res) => {
    const query = req.params.id;
    Address.findByIdAndRemove(query, (errorDelete) => (
      errorDelete ? res.send(errorDelete) : res.send('deleted')
    ));
  });

  router.post('/:id', (req, res) => {
    const query = req.params.id;
    Address.findByIdAndUpdate(query, (errorUpdate, address) => (
      errorUpdate ? res.send(errorUpdate) : res.send(address)
    ));
  });
  return router;
}
module.exports = addressRouter;
