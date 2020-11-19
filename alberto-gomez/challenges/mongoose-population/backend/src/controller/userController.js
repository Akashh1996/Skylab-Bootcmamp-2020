const countryModel = require('../models/countryModel');

function userController(User) {
  function getMethod(req, res) {
    const query = {};
    User.find(query).populate({
      path: 'address',
      populate: {
        path: 'country',
        model: countryModel,
      },
    })
      .exec((error, users) => (
        error
          ? res.send(error)
          : res.json(users)
      ));
  }

  function putMethod(req, res) {
    const user = new User(req.body);
    user.save((error, userSaved) => (
      error
        ? res.send(error)
        : res.json(userSaved)
    ));
  }

  return { getMethod, putMethod };
}

module.exports = userController;
