const express = require('express');
const userController = require('../controller/userController');

function UserRouter(User) {
  const router = express.Router();
  const user = userController(User);

  router.route('/')
    .get(user.getMethod)
    .put(user.putMethod);

  return router;
}

module.exports = UserRouter;
