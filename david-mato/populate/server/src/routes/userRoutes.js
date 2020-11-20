const { Router } = require('express');
const productsController = require('../controllers/userController');

function UserRouter(User) {
  const router = Router();
  const todoList = productsController(User);

  router.route('/')
    .get(todoList.getMethod)
    .post(todoList.postMethod);

  return router;
}

module.exports = UserRouter;
