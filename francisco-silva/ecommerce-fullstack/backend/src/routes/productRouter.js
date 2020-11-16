const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');

function productRouter(Product) {
  const router = express.Router();
  const product = productController(Product);
  const products = productsController(Product);

  router.route('/')
    .get(products.getMethod)
    .put(products.putMethod);

  router.route('/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod)
    .post(product.postMethod)
    .delete(product.deleteMethod);

  return router;
}

module.exports = productRouter;
