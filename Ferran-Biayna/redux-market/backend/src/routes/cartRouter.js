const express = require('express');
const cartController = require('../controllers/cartController');

function cartRouter(Cart) {
  const router = express.Router();
  const cart = cartController(Cart);

  router.route('/')
    .get(cart.getMethod)
    .delete(cart.deleteMethod);

  return router;
}

module.exports = cartRouter;
