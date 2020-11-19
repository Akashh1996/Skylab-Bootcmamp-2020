const countryModel = require('../models/countriesModel');

function addressController(Address) {
  function getMethod(req, res) {
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
  }
  function putMethod(req, res) {
    const query = req.body;
    Address.create(query, (errorPutAddress, address) => {
      if (errorPutAddress) {
        res.send(errorPutAddress);
      }
      res.json(address);
    });
  }
  return { getMethod, putMethod };
}

module.exports = addressController;
