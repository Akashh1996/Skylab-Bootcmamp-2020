const express = require('express');
const userController = require('./../controllers/userController');
const usersController = require('./../controllers/usersControllers');

function userRouter(User) {
  const router = express.Router();
  const user = userController(User);
  const users = usersController(User);

  router.route('/')
    .get(users.getMethod)
    .put(users.putMethod);

  router.route('/:userId')
    .all(user.allMiddleware)
    .get(user.getMethod)
    .post(user.postMethod)
    .delete(user.deleteMethod);

  return router;
}

module.exports = userRouter;