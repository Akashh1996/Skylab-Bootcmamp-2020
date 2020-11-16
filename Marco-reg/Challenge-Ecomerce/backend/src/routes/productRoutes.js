/* eslint-disable linebreak-style */
const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsControllers');
const cartController = require('../controllers/cartController');

function productRouter(Product, Cart) {
  const router = express.Router();
  const product = productController(Product);
  const products = productsController(Product);
  const cart = cartController(Cart);

  router.route('/')
    .get(products.getMethod)
    .put(products.putMethod);

  router.route('/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod)
    .post(product.postMethod)
    .delete(product.deleteMethod);
  router.route('/cart')
    .get(cart.getMethod)
    .put(cart.putMethod)
    .delete(cart.deleteMethod);

  return router;
}

module.exports = productRouter;
