export {}
const { Router } = require('express');
const groceryListController = require('../controllers/groceryListController');

function groceryListRouter(ProductModel) {
  const router = Router();
  const groceryList = groceryListController(ProductModel);

  router.route('/')
    .get(groceryList.getMethod);

  return router;
}

module.exports = groceryListRouter;