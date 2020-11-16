const express = require('express');
const productController = require('../controllers/productController');
const listController = require('../controllers/listController');
const cartController = require('../controllers/cartController');

function routes(Product) {
  const router = express.Router();
  const product = productController(Product);
  const list = listController(Product);
  const cart = cartController(Product);

  router.route('/products')
    .get(list.getMethod);

  router.route('/products/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod);

  router.route('/cart')
    .get(cart.getMethod)
    .put(cart.putMethod)
    .delete(cart.deleteMethod);

  return router;
}

module.exports = routes;
