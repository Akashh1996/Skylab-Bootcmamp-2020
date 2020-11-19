const express = require('express');
const UsersController = require('../controllers/UsersController');

function usersRouter(Users) {
  const router = express.Router();
  const users = UsersController(Users);

  router.route('/')
    .get(users.getMethod)
    .post(users.postMethod)
    .put(users.putMethod)
    .delete(users.deleteMethod);

  return router;
}

module.exports = usersRouter;
