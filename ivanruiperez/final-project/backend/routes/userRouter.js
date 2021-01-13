const express = require('express');
const usersController = require('../controllers/usersController');

function userRouter(User) {
  const router = express.Router();
  const users = usersController(User);

  router.route('/')
    .get(users.getMethod)
    .post(users.postMethod);

  return router;
}

module.exports = userRouter;
