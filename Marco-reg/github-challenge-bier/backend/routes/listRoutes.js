const express = require('express');
const listController = require('../controllers/listController');

function routes(list) {
  const listRouter = express.Router();
  const listItems = listController(list);
  listRouter.route('/')
    .get(listItems.getMethod)
    .put(listItems.putMethod);
  return listRouter;
}

module.exports = routes;
