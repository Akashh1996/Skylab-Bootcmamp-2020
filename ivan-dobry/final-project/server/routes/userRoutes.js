const express = require('express');
const userController = require('../controllers/userController');

function routes(user) {
  const userRouter = express.Router();
  const userR = userController(user);
  userRouter.route('/')
    .get(userR.getMethod)
    .put(userR.putMethod)
    .post(userR.postMethod);

  return userRouter;
}

module.exports = routes;
