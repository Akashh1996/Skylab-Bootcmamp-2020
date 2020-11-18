const express = require('express');
const todoController = require('../controllers/todoController');

function todoRouter(Todo) {
  const router = express.Router();
  const todo = todoController(Todo);

  router.route('/')
    .get(todo.getMethod)
    .delete(todo.deleteMethod)
    .patch(todo.patchMethod)
    .post(todo.postMethod);

  return router;
}

module.exports = todoRouter;
