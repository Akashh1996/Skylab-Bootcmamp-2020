const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');

function routes(ShoppingCartStore) {
  const router = express.Router();
  const shoppingCart = shoppingCartController(ShoppingCartStore);

  router.route('/')
    .get(shoppingCart.getMethod)
    .put(shoppingCart.putMethod)
    .delete(shoppingCart.deleteMethod);

  return router;
}

module.exports = routes;
