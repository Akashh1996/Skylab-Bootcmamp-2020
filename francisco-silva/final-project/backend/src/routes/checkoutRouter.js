const express = require('express');

const checkoutController = require('../controllers/checkoutController');

function checkoutRouter(Order) {
  const router = express.Router();
  const order = checkoutController(Order);

  router.route('/')
    .get(order.getMethod)
    .put(order.putMethod)
    .post(order.postMethod);

  return router;
}

module.exports = checkoutRouter;
