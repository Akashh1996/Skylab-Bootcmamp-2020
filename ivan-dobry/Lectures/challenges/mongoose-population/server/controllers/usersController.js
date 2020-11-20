/* eslint-disable no-console */
const countryModel = require('../models/countriesModel');

function usersController(users) {
  function getMethod(req, res) {
    const query = {};
    users.find(query).populate({
      path: 'adress',
      populate: {
        path: 'country', model: countryModel,
      },
    }).exec((errorfindUser, usersData) => {
      if (errorfindUser) {
        return res.send(errorfindUser);
      }
      console.log('getting data');
      return res.json(usersData);
    });
  }

  return {
    getMethod,
  };
}

module.exports = usersController;
