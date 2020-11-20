const countriesModel = require('../models/countriesModel');
const addressModel = require('../models/addressesModel');

/* eslint-disable no-underscore-dangle */
function UsersController(Users) {
  function getMethod(req, res) {
    Users.find({})
      .populate({
        path: 'address',
        populate: { path: 'country', model: countriesModel },
      })
      .exec((errorFindUsers, users) => (errorFindUsers
        ? res.send(errorFindUsers)
        : res.json(users)));
  }

  function postMethod(req) {
    const { user } = req.body;
    const userInfo = {
      name: user.name,
      age: user.age,
    };
    const addressInfo = {
      street: user.street,
      number: user.number,
      city: user.city,
    };
    const countryInfo = {
      code: user.countryCode,
      name: user.countryName,
    };

    const addressCallback = (errorAddress, newAddress) => {
      userInfo.address = newAddress._id;
      Users.create(userInfo);
    };
    const countryCallback = (errorCountry, newCountry) => {
      addressInfo.country = newCountry._id;
      addressModel.create(addressInfo, addressCallback);
    };
    countriesModel.create(countryInfo, countryCallback);
  }

  function deleteMethod({ body }, res) {
    Users.findByIdAndRemove(body._id, (errorDeleteUsers, deletedUsers) => (errorDeleteUsers
      ? res.send(errorDeleteUsers)
      : res.json(deletedUsers)));
  }

  return {
    getMethod, postMethod, deleteMethod,
  };
}

module.exports = UsersController;
