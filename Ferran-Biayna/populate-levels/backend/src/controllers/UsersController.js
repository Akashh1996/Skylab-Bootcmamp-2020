const countriesModel = require('../models/countriesModel');

/* eslint-disable no-underscore-dangle */
function UsersController(Users) {
  function getMethod(req, res) {
    Users.find({})
      .populate({
        path: 'address',
        populate: { path: 'country', model: countriesModel },
      })
      .exec((errorFindUsers, users) => (errorFindUsers
        ? res.send(errorFindUsers)
        : res.json(users)));
  }

  function postMethod({ body }, res) {
    Users.create(body, (errorAddUser, newUser) => (errorAddUser
      ? res.send(errorAddUser)
      : res.json(newUser)));
  }

  function putMethod({ body }, res) {
    Users.findByIdAndUpdate(body._id, (errorAddUser, newUser) => (errorAddUser
      ? res.send(errorAddUser)
      : res.json(newUser)));
  }

  function deleteMethod({ body }, res) {
    Users.findByIdAndRemove(body._id, (errorDeleteUsers, deletedUsers) => (errorDeleteUsers
      ? res.send(errorDeleteUsers)
      : res.json(deletedUsers)));
  }

  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = UsersController;
