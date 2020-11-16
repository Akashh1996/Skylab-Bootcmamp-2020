const express = require('express');
const cartController = require('../controllers/cartController');

function marketRouter(Carts) {
  const router = express.Router();
  const cart = cartController(Carts);

  router.route('/cart')
    .get(cart.getMethod)
    .post(cart.postMethod)
    .delete(cart.deleteMethod);

  return router;
}

module.exports = marketRouter;
