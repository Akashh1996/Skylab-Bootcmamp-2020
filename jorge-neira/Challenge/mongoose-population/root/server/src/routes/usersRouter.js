const { Router } = require('express');
const usersController = require('../controllers/usersController');

function usersRouter(User, Address, Country) {
  const router = Router();
  const users = usersController(User, Address, Country);
  router.route('/')
    .get(users.getUsersMethod);

  return router;
}

module.exports = usersRouter;
