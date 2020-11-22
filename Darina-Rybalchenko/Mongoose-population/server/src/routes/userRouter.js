const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(User, Address, Country) {
  const router = Router();
  const users = userController(User, Address, Country);
  router.route('/')
    .get(users.getMethod)
    .put(users.putMethod);

  return router;
}
module.exports = userRouter;
