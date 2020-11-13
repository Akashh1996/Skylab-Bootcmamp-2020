const express = require('express');
const itemsController = require('../controllers/itemsController');

function itemsRouter(ItemsStore) {
  const router = express.Router();
  const items = itemsController(ItemsStore);

  router.route('/')
    .get(items.getMethod);

  router.route('/:itemId')
    .get(items.getByIdMethod);

  return router;
}

module.exports = itemsRouter;
