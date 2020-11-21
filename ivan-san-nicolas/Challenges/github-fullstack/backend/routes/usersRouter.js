const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(User) {
  const router = Router();
  const user = userController(User);

  router.route('/')
    .get(user.getMethod)
    .post(user.postMethod)
    .patch(user.patchMethod)
    .delete(user.deleteMethod);

  return router;
}

module.exports = userRouter;
