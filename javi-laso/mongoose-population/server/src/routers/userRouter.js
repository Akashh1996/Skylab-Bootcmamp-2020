const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(userSchema, addressSchema, countrySchema) {
  const router = Router();
  const controller = userController(userSchema, addressSchema, countrySchema);

  router.route('/')
    .get(controller.getUsersMethod)
    .put(controller.putUsersMethod);

  return router;
}

module.exports = userRouter;
