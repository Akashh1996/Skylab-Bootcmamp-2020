const express = require('express');
const productsListController = require('../controllers/productsListController');
const productDetailController = require('../controllers/productDetailController');

function marketRouter(Products) {
  const router = express.Router();
  const products = productsListController(Products);
  const product = productDetailController(Products);

  router.route('/')
    .get(products.getMethod);

  router.route('/product/:productName')
    .get(product.getMethod);

  return router;
}

module.exports = marketRouter;
