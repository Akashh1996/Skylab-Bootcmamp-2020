const express = require('express');
const listController = require('../controllers/listController');

function routes(items) {
  const listRouter = express.Router();
  const item = listController(items);

  listRouter.route('/')
    .get(item.getMethod)
    .delete(item.deleteMethod)
    .put(item.putMethod)
    .patch(item.patchMethod);
  return listRouter;
}

module.exports = routes;
