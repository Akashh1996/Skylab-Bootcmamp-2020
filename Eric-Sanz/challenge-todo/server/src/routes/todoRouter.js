const express = require('express');
const todoController = require('../controllers/todoController');
const todosController = require('../controllers/todosController');

function todoRouter(Todo) {
  const router = express.Router();
  const todos = todosController(Todo);
  const todo = todoController(Todo);

  router.route('/')
    .get(todos.getMethod)
    .put(todos.putMethod);

  router.route('/:todoId')
    .all(todo.allMiddleware)
    .get(todo.getMethod)
    .post(todo.postMethod)
    .delete(todo.deleteMethod);

  return router;
}

module.exports = todoRouter;
