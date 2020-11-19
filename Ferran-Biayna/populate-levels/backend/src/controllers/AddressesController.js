const countriesModel = require('../models/countriesModel');

/* eslint-disable no-underscore-dangle */
function AddressesController(Addresses) {
  function getMethod(req, res) {
    Addresses.find({}).populate({ path: 'countries', model: countriesModel })
      .exec((errorFindAddresses, addresses) => (errorFindAddresses
        ? res.send(errorFindAddresses)
        : res.json(addresses)));
  }

  function postMethod({ body }, res) {
    Addresses.create(body, (errorAddAddress, newAddress) => (errorAddAddress
      ? res.send(errorAddAddress)
      : res.json(newAddress)));
  }

  function putMethod({ body }, res) {
    Addresses.findByIdAndUpdate(body._id, (errorAddAddresses, newAddresses) => (errorAddAddresses
      ? res.send(errorAddAddresses)
      : res.json(newAddresses)));
  }

  function deleteMethod({ body }, res) {
    Addresses.findByIdAndRemove(body._id,
      (errorDeleteAddresses, deletedAddresses) => (errorDeleteAddresses
        ? res.send(errorDeleteAddresses)
        : res.json(deletedAddresses)));
  }

  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = AddressesController;
