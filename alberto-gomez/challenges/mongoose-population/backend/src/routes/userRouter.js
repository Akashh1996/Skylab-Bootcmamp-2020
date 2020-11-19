const express = require('express');
const countryModel = require('../models/countryModel');

const router = express.Router();

function UserRouter(User) {
  router.get('/', (req, res) => {
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
  });

  router.put('/', (req, res) => {
    const user = new User(req.body);
    user.save((error, userSaved) => (
      error
        ? res.send(error)
        : res.json(userSaved)
    ));
  });

  return router;
}

module.exports = UserRouter;
