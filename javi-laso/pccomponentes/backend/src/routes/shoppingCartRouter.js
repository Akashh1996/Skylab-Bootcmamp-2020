const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');

function cartRoutes(cartItemSchema) {
  const router = express.Router();
  const shoppingCart = shoppingCartController(cartItemSchema);

  router.route('/')
    .get(shoppingCart.getMethod)
    .patch(shoppingCart.patchMethod)
    .delete(shoppingCart.deleteMethod);

  return router;
}

module.exports = cartRoutes;
