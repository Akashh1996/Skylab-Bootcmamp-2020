const express = require('express');
const listController = require('../controllers/listController');

function routes(List) {
  const listRouter = express.Router();
  const list = listController(List);
  listRouter.route('/')
    .get(list.getMethod)
    .put(list.putMethod);
  return listRouter;
}

module.exports = routes;
