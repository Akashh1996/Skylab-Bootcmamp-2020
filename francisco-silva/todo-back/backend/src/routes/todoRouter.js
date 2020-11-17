const express = require('express');
const todoController = require('../controllers/todoController');

function todoRouter(Todo) {
  const router = express.Router();
  const todo = todoController(Todo);

  router.route('/')
    .get(todo.getMethod);
  // .put(todo.putMethod)
  // .post(todo.postMethod)
  // .delete(todo.deleteMethod);

  return router;
}

module.exports = todoRouter;
