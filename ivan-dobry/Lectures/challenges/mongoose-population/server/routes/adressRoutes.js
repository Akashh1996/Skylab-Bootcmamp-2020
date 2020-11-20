const express = require('express');

const adressController = require('../controllers/adressController');

function routes(adress) {
  const userRouter = express.Router();
  const usersRoute = adressController(adress);

  userRouter.route('/')
    .put(usersRoute.putMethod);

  return userRouter;
}

module.exports = routes;
