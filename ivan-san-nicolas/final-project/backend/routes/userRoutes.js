const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter(User) {
  const router = Router();
  const user = userController(User);

  router.route('/')
    .get(user.getMethod)
    .patch(user.patchMethod)
    .delete(user.deleteMethod)
    .post(user.postMethod);

  return router;
}

module.exports = userRouter;
