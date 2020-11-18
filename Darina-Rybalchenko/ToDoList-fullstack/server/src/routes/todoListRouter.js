const express = require('express');
const todoListController = require('../controllers/todoListController');

function todoListRouter(TodoList) {
  const router = express.Router();
  const todoList = todoListController(TodoList);

  router.route('/')
    .get(todoList.getMethod)
    .put(todoList.putMethod)
    .post(todoList.postMethod)
    .delete(todoList.deleteMethod);

  return router;
}

module.exports = todoListRouter;
