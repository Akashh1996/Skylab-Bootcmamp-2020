const { Router } = require('express');
const userIdController = require('../controllers/userIdController');

function userRouter(User) {
  const router = Router();
  const user = userIdController(User);

  router.route('/:id')
    .get(user.getMethod);

  return router;
}
module.exports = userRouter;
