const express = require('express');

const usersController = require('../controllers/usersController');

function routes(users) {
  const userRouter = express.Router();
  const usersRoute = usersController(users);

  userRouter.route('/')
    .get(usersRoute.getMethod);

  return userRouter;
}

module.exports = routes;
