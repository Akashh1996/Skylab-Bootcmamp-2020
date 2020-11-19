const countryModel = require('../models/countriesModel');

function userController(User) {
  function getMethod(req, res) {
    const query = {};
    User.find(query).populate({
      path: 'address',
      populate: {
        path: 'country',
        model: countryModel,
      },
    }).exec((error, foundCoso) => {
      if (error) {
        res.send(error);
      }
      res.send(foundCoso);
    });
  }
  function putMethod(req, res) {
    const query = req.body;
    User.create(query, (errorPutUser, user) => {
      if (errorPutUser) {
        res.send(errorPutUser);
      }
      res.json(user);
    });
  }
  return { getMethod, putMethod };
}

module.exports = userController;
