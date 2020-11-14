const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/cartController');

function productRouter(Product) {
  const router = express.Router();
  const product = productController(Product);
  const products = productsController(Product);
  const cart = cartController(Product);

  router.route('/')
    .get(products.getMethod)
    .post(product.postMethod);

  router.route('/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod)
    .post(product.postMethod);

  router.route('/cart')
    .get(cart.getMethod)
    .delete(product.deleteMethod);

  return router;
}

module.exports = productRouter;
