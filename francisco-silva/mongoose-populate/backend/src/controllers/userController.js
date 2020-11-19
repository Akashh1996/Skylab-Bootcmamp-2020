// const countryModel = require('../models/countryModel');

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
    user.exec((errorGetUser, foundUser) => {
      if (errorGetUser) {
        return res.send(errorGetUser);
      }
      return res.json(foundUser);
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
