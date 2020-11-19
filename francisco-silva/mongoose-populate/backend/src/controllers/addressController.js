const countryModel = require('../models/countryModel');

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
    Address.create(query, (errorPutUser, user) => {
      if (errorPutUser) {
        res.send(errorPutUser);
      }
      res.json(user);
    });
  }

  function deleteMethod(req, res) {
    const query = req.params.id;
    Address.findByIdAndRemove(query, (errorDelete) => (
      errorDelete ? res.send(errorDelete) : res.send('deleted')
    ));
  }

  function postMethod(req, res) {
    const query = req.params.id;
    Address.findByIdAndUpdate(query, (errorUpdate, address) => (
      errorUpdate ? res.send(errorUpdate) : res.send(address)
    ));
  }
  return {
    getMethod, putMethod, deleteMethod, postMethod,
  };
}

module.exports = addressController;
