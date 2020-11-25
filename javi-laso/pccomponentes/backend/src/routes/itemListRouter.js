const express = require('express');
// const itemsController = require('../controllerks/itemsController');
const itemsMongoController = require('../controllers/itemsMongoController');

function itemsRouter(itemSchema) {
  const router = express.Router();
  // const items = itemsController(ItemsStore);
  const itemsMongo = itemsMongoController(itemSchema);

  router.route('/')
    .get(itemsMongo.getMethod)
    .post(itemsMongo.postMethod)
    .delete(itemsMongo.deleteMethod)
    .patch(itemsMongo.patchMethod);

  router.route('/:itemId')
    .get(itemsMongo.getByIdMethod);

  return router;
}

module.exports = itemsRouter;
