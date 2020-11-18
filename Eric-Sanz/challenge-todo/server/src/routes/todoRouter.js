const express = require('express');
const todosController = require('../controllers/todosController');

function todoRouter(Todo) {
  const router = express.Router();
  const todos = todosController(Todo);

  router.route('/')
    .get(todos.getMethod)
    .put(todos.putMethod)
    .post(todos.postMethod)
    .delete(todos.deleteMethod);

  return router;
}

module.exports = todoRouter;
