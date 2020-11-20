const countriesModel = require('../models/countriesModel');
const addressModel = require('../models/addressesModel');

/* eslint-disable no-underscore-dangle */
function UsersController(Users) {
  function getMethod(req, res) {
    Users.find({})
      .populate({
        path: 'address',
        populate: { path: 'country' },
      })
      .exec((errorFindUsers, users) => (errorFindUsers
        ? res.send(errorFindUsers)
        : res.json(users)));
  }

  async function postMethod(req, res) {
    console.log(req.body);
    const { user: { address, ...userInfo } } = req.body;

    const countryInfo = {
      ...address.country,
    };

    try {
      const countryResponse = await countriesModel.create(countryInfo);
      const addressResponse = await addressModel.create(
        { ...address, country: countryResponse._id },
      );
      const userResponse = await Users.create(
        { ...userInfo, address: addressResponse._id },
      );
      res.json(userResponse);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = UsersController;
