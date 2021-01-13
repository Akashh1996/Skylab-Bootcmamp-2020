const express = require('express');

const cartController = require('../controllers/cartController');

function cartRouter(cartProducts) {
  const router = express.Router();
  const cart = cartController(cartProducts);

  router.route('/')

    .get(cart.getMethod)
    .put(cart.putMethod)
    .delete(cart.deleteMethod)
    .post(cart.deleteAllMethod);

  return router;
}

module.exports = cartRouter;
