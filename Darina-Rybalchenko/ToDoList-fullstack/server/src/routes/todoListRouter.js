const express = require('express');
const todoListController = require('../controllers/todoListController');

function todoListRouter(TodoList) {
  const router = express.Router();
  const todoList = todoListController(TodoList);

  router.route('/')
    .get(todoList.getMethod);
  return router;
}

module.exports = todoListRouter;
