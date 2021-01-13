const { Router } = require('express');
const userController = require('../controllers/userController/userController');

function userRouter(User) {
  const router = Router();

  const user = userController(User);

  router.route('')
    .get(user.getMethod)
    .post(user.postMethod);

  return router;
}

module.exports = userRouter;
