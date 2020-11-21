const { Router } = require('express');
const usersController = require('../controllers/usersController');

function usersRouter(Users) {
  const router = Router();
  const users = usersController(Users);

  router.route('/')
    .get(users.getMethod);

  return router;
}

module.exports = usersRouter;
