const countryModel = require('../models/countryModel');

function userController(User) {
  function getMethod(req, res) {
    const query = {};
    function findCallback(error, users) {
      return error ? res.send(error) : res.json(users);
    }

    User.find(query)
      .populate({
        path: 'address',
        populate: {
          path: 'country',
          model: countryModel,
        },
      })
      .exec(findCallback);
  }

  function postMethod(req, res) {
    const query = req.body;
    function findCallback(error, userSaved) {
      return error ? res.send(error) : res.json(userSaved);
    }

    User.create(query, findCallback);
  }

  return {
    getMethod,
    postMethod,
  };
}

module.exports = userController;
