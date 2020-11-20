const express = require('express');

const countryController = require('../controllers/countriesController');

function routes(adress) {
  const userRouter = express.Router();
  const usersRoute = countryController(adress);

  userRouter.route('/')
    .put(usersRoute.putMethod);

  return userRouter;
}

module.exports = routes;
