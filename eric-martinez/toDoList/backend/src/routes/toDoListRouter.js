const express = require('express');
const itemController = require('../controllers/itemController');
const itemDeleteController = require('../controllers/itemDeleteController');

function itemsRouter(Items) {
  const router = express.Router();
  const item = itemController(Items);
  const deleteItem = itemDeleteController(Items);

  router.route('/')
    .get(item.getMethod)
    .put(item.putMethod);
  router.route('/:idItem')
    .delete(deleteItem.deleteMethod);
  return router;
}

module.exports = itemsRouter;
