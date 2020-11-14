const express = require('express');
const cartController = require('../controllers/cartController');

function cartRouter(Product) {
  const router = express.Router();
  const cart = cartController(Product);

  router.route('/')
    .get(cart.getMethod);

  router.route('/:productId')
    .delete(cart.deleteMethod);

  return router;
}

module.exports = cartRouter;
