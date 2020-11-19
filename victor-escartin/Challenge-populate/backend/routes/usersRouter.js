const express = require('express');
const usersController = require('../controllers/usersControllers');

function populateUserRouter(User) {
  const userRouter = express.Router();
  const users = usersController(User);

  userRouter.route('/')
    .get(users.getMethod)
    .put(users.putMethod);

  return userRouter;
}

module.exports = populateUserRouter;