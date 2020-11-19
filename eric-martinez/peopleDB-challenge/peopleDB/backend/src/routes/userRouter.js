const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(User) {
  const router = Router();
  const user = userController(User);

  router.route('/')
    .get(user.getMethod)
    .put(user.putMethod);

  return router;
}

module.exports = userRouter;
