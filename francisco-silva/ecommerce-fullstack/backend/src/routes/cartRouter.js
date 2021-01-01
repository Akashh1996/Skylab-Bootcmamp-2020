const express = require('express');
const cartController = require('../controllers/cartController');

function cartRouter(Cart) {
  const router = express.Router();
  const cart = cartController(Cart);

  router.route('/')
    .get(cart.getMethod)
    .post(cart.postMethod);

  return router;
}

module.exports = cartRouter;
