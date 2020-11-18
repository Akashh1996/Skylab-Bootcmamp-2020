const { Router } = require('express');
const todoController = require('../controllers/todoController');

function todoRouter(Todo) {
  const router = Router();
  const todo = todoController(Todo);

  router.route('/')
    .get(todo.getMethod)
    .delete(todo.deleteMethod)
    .put(todo.putMethod)
    .post(todo.postMethod);
  return router;
}

module.exports = todoRouter;
