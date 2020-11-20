const { Router } = require('express');
const usersController = require('../controllers/usersController');

function usersRouter(Users) {
  const router = Router();
  const agenda = usersController(Users);

  router.route('/')
    .get(agenda.getMethod)
    .put(agenda.putMethod);

  return router;
}

module.exports = usersRouter;
