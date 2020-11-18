const express = require('express');
const ListController = require('../controllers/ListController');

function toDoRouter(ToDo) {
  const router = express.Router();
  const list = ListController(ToDo);

  router.route('/')
    .get(list.getMethod)
    .post(list.postMethod)
    .put(list.putMethod)
    .delete(list.deleteMethod);

  return router;
}

module.exports = toDoRouter;
