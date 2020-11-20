const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(User, Address, Country) {
  const router = Router();
  const user = userController(User, Address, Country);

  router.route('/')
    .get(user.getMethod)
    .put(user.putMethod);

  return router;
}

module.exports = userRouter;
