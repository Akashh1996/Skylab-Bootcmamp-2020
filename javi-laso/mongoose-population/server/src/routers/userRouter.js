const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(userSchema, countrySchema) {
  const router = Router();
  const controller = userController(userSchema, countrySchema);

  router.route('/')
    .get(controller.getUsersMethod)
    .post(controller.postUsersMethod);

  return router;
}

module.exports = userRouter;
