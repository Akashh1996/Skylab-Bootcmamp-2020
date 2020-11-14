const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');

function productsRouter(Product) {
  const router = express.Router();
  const product = productController(Product);
  const products = productsController(Product);

  router.route('/')
    .get(products.getMethod);

  router.route('/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod);

  return router;
}

module.exports = productsRouter;
