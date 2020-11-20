const addressesModel = require('../models/adressesModel');
const countriesModel = require('../models/countriesModel');

function usersController(Users) {
  function getMethod(req, res) {
    const query = {};
    Users.find(query)
      .populate({
        path: 'address',
        model: addressesModel,
        populate: {
          path: 'country',
          model: countriesModel,
        },
      })
      .exec((errorFindPersons, findPersons) => {
        if (errorFindPersons) {
          return res.send(errorFindPersons);
        }
        return res.json(findPersons);
      });
  }

  function putMethod(req, res) {
    const query = req.body;
    Users.create(query)
      .populate({
        path: 'address',
        model: addressesModel,
        populate: {
          path: 'country',
          model: countriesModel,
        },
      })
      .exec((errorFindPersons, findPersons) => {
        if (errorFindPersons) {
          return res.send(errorFindPersons);
        }
        return res.json(findPersons);
      });
  }

  return { getMethod, putMethod };
}

module.exports = usersController;
