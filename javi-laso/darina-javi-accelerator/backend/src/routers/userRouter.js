const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(userSchema) {
  const router = Router();
  const projects = userController(userSchema);

  router.route('/')
    .get(projects.getUsersMethod)
    .post(projects.postUserMethod);

  return router;
}

module.exports = userRouter;
