const { Router } = require('express');
const userController = require('../controllers/userController');

function peopleRouter(User) {
  const router = Router();
  const user = userController(User);

  router.route('/heroes')
    .get(user.getMethod)
    .put(user.putMethod);

  return router;
}

module.exports = peopleRouter;
