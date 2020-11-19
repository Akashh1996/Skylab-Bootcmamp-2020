const countryModel = require('../models/countriesModel');

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
  function putMethod(req, res) {
    const query = req.body;
    User.create(query, (errorPutUser, user) => {
      if (errorPutUser) {
        return res.send(errorPutUser);
      }
      return res.json(user);
    });
  }
  return { getMethod, putMethod };
}

module.exports = userController;
