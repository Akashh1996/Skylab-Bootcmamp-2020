const countryModel = require('../models/countriesModel');
const addressModel = require('../models/addressModel');

function userController(User) {
  function getMethod(req, res) {
    const query = {};
    const user = User.find(query);
    user.populate({
      path: 'address',
      populate: {
        path: 'country',
        model: countryModel,
      },
    });
    user.exec((error, users) => {
      if (error) {
        res.send(error);
      }
      res.send(users);
    });
  }
  function putMethod(req) {
    const { info } = req.body;
    const userInfo = {
      name: info.name,
      age: info.age,
    };
    const addressInfo = {
      street: info.street,
      number: info.number,
      city: info.city,
    };
    const countryInfo = {
      code: info.code,
      countryName: info['country-name'],
    };

    const addressCallback = (errorAddress, newAddress) => {
      userInfo.address = newAddress._id;
      User.create(userInfo);
    };

    const countryCallback = (errorCountry, newCountry) => {
      addressInfo.country = newCountry._id;
      addressModel.create(addressInfo, addressCallback);
    };

    countryModel.create(countryInfo, countryCallback);
  }

  return { getMethod, putMethod };
}

module.exports = userController;
