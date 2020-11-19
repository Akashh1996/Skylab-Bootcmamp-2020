const express = require('express');
const productsController = require('../controllers/todoListController');

function todoListRouter(TodoList) {
  const router = express.Router();
  const todoList = productsController(TodoList);

  router.route('/')
    .get(todoList.getMethod)
    .post(todoList.postMethod)
    .put(todoList.putMethod)
    .delete(todoList.deleteMethod);

  return router;
}

module.exports = todoListRouter;
