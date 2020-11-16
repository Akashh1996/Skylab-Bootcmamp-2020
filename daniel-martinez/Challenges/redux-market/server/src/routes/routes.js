const express = require('express');
const productController = require('../controllers/productController');
const listController = require('../controllers/listController');
const cartController = require('../controllers/cartController');

function routes(Product, Cart) {
  const router = express.Router();
  const product = productController(Product);
  const list = listController(Product);
  const cart = cartController(Cart);

  router.route('/products')
    .get(list.getMethod);

  router.route('/products/:productId')
    .get(product.getMethod);

  router.route('/cart')
    .get(cart.getMethod)
    .put(cart.putMethod)
    .delete(cart.deleteMethod);

  return router;
}

module.exports = routes;
