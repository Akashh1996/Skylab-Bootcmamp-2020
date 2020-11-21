const { Router } = require('express');
const usersController = require('../controllers/usersController');

function userRouter(User) {
  const router = Router();
  const users = usersController(User);

  router.route('/')
    .get(users.getMethod)
    .post(users.postMethod)
    .patch(users.patchMethod)
    .delete(users.deleteMethod);

  return router;
}

module.exports = userRouter;
