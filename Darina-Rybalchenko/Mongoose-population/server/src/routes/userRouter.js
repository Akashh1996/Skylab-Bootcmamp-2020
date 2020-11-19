const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(User) {
  const router = Router();
  const users = userController(User);
  router.route('/')
    .get(users.getMethod)
    .put(users.putMethod);

  return router;
}
module.exports = userRouter;
