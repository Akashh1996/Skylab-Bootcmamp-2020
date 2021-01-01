/* eslint-disable no-underscore-dangle */
const addressModel = require('../models/addressModel');
const countryModel = require('../models/countryModel');

function userController(User, Country) {
  function getMethod(req, res) {
    const query = {};
    const user = User.find(query);
    user.populate({
      path: 'address',
      populate: {
        path: 'country',
        model: Country,
      },
    });
    user.exec((errorFindHero, users) => {
      if (errorFindHero) {
        res.send(errorFindHero);
      }

      res.json(users);
    });
  }

  async function putMethod(req, res) {
    const { info: { address, ...userInfo } } = req.body;

    try {
      const createdCountryResponse = await countryModel.create(address.country);

      const createdAddressResponse = await addressModel.create(
        { ...address, country: createdCountryResponse._id },
      );

      const createdUserResponse = await User.create(
        { ...userInfo, address: createdAddressResponse._id },
      );
      res.json(createdUserResponse);
    } catch (error) {
      res.send(error);
    }
  }

  return { getMethod, putMethod };
}

module.exports = userController;
