const countriesModel = require('../models/countriesModel');

function adressesController(Adresses) {
  function getMethod(req, res) {
    const query = {};
    Adresses.find(query)
      .populate({
        path: 'country',
        model: countriesModel,
      })
      .exec((errorFindAdresses, findAdresses) => {
        if (errorFindAdresses) {
          return res.send(errorFindAdresses);
        }
        return res.json(findAdresses);
      });
  }

  function putMethod(req, res) {
    const query = req.body;
    Adresses.create(query)
      .populate({
        path: 'country',
        model: countriesModel,
      })
      .exec((errorFindAdresses, findAdresses) => {
        if (errorFindAdresses) {
          return res.send(errorFindAdresses);
        }
        return res.json(findAdresses);
      });
  }

  return { getMethod, putMethod };
}

module.exports = adressesController;
