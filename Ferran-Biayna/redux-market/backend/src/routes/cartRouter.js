const express = require('express');
const cartController = require('../controllers/cartController');

function cartRouter(Product, Cart) {
  const router = express.Router();
  const cart = cartController(Product, Cart);

  router.route('/')
    .get(cart.getMethod);

  router.route('/:productId')
    .delete(cart.deleteMethod);

  return router;
}

module.exports = cartRouter;
