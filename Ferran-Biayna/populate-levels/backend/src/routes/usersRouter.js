const express = require('express');
const UsersController = require('../controllers/UsersController');

function usersRouter(Users) {
  const router = express.Router();
  const users = UsersController(Users);

  router.route('/')
    .get(users.getMethod)
    .post(users.postMethod);

  return router;
}

module.exports = usersRouter;
