const { Router } = require('express');
const userController = require('./../controllers/userController');

function workoutRouter (userSchema, scheduleSchema) {
  const router = Router();
  const users = userController(userSchema, scheduleSchema);

  router.route('/')
    .get(users.getUsersMethod)
    .patch(users.patchUserMethod)
    .put(users.putUserMethod);

  router.route('/:userId')
    .get(users.getUserMethod);

  return router;
}

module.exports = workoutRouter;
