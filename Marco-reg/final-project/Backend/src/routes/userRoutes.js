const express = require('express');
const userController = require('../controllers/usersController');

function routes(user) {
  const userRouter = express.Router();
  const userItems = userController(user);

  userRouter.route('/')
    .put(userItems.putMethod);

  userRouter.route('/:userId')
    .get(userItems.getMethod);
  return userRouter;
}

module.exports = routes;
