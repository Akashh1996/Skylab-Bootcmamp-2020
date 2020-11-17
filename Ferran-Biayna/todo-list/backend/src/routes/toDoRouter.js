const express = require('express');
const toDoController = require('../controllers/toDoController');

function toDoRouter(ToDo) {
  const router = express.Router();
  const toDo = toDoController(ToDo);

  router.route('/')
    .get(toDo.getMethod)
    .post(toDo.postMethod);

  router.route('/:toDoId')
    .put(toDo.putMethod)
    .delete(toDo.deleteMethod);

  return router;
}

module.exports = toDoRouter;
