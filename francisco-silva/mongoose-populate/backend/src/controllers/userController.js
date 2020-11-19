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
    }).exec((errorGetUser, foundUser) => {
      if (errorGetUser) {
        res.send(errorGetUser);
      }
      res.send(foundUser);
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

  function deleteMethod(req, res) {
    const query = req.params.id;
    User.findByIdAndRemove(query, (errorDelete) => (
      errorDelete ? res.send(errorDelete) : res.send('deleted')
    ));
  }

  function postMethod(req, res) {
    const query = req.params.id;
    User.findByIdAndUpdate(query, (errorUpdate, address) => (
      errorUpdate ? res.send(errorUpdate) : res.send(address)
    ));
  }
  return {
    getMethod, putMethod, deleteMethod, postMethod,
  };
}

module.exports = userController;
