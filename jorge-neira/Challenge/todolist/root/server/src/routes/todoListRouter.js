const express = require('express');
const todoListController = require('../controllers/todoListController');

function todosRouter(Todos) {
  const router = express.Router();
  const todo = todoListController(Todos);

  router.route('/todos')
    .get(todo.getMethod)
    .post(todo.postMethod)
    .patch(todo.patchMethod)
    .delete(todo.deleteMethod);

  return router;
}

module.exports = todosRouter;
