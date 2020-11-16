const express = require('express');
const productsListController = require('../controllers/productsListController');
const productDetailController = require('../controllers/productDetailController');
const cartController = require('../controllers/cartController');

function marketRouter(Products) {
  const router = express.Router();
  const products = productsListController(Products);
  const product = productDetailController(Products);
  const cart = cartController(Products);

  router.route('/')
    .get(products.getMethod);

  router.route('/product/:productName')
    .all(product.allMiddleware)
    .get(product.getMethod);

  router.route('/cart')
    .get(cart.getMethod)
    .post(cart.postMethod)
    .delete(cart.deleteMethod);

  return router;
}

module.exports = marketRouter;
