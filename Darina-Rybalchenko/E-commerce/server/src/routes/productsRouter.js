const express = require('express');

const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');

function productRouter(Products) {
  const router = express.Router();
  const product = productController(Products);
  const products = productsController(Products);

  router.route('/')
    .get(products.getMethod);

  router.route('/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod);

  return router;
}

module.exports = productRouter;
