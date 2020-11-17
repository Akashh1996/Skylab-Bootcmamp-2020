const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');

function productRouter(Product, Cart) {
  const router = express.Router();
  const product = productController(Product, Cart);
  const products = productsController(Product, Cart);

  router.route('/')
    .get(products.getMethod)
    .post(product.postMethod);

  router.route('/:productId')
    .get(product.getMethod);

  return router;
}

module.exports = productRouter;
