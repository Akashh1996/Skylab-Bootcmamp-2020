const express = require('express');
const todoController = require('../controllers/todoController');

function todoRouter(Todo) {
  const router = express.Router();
  const todo = todoController(Todo);

  router.route('/:id')
    .delete(todo.deleteMethod);

  router.route('/')
    .get(todo.getMethod)
    .put(todo.putMethod)
    .post(todo.updateMethod);

  return router;
}

module.exports = todoRouter;
