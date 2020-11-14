const express = require('express');
// const productController = require('../controllers/productController');
const listController = require('../controllers/listController');

function routes(Product) {
  const router = express.Router();
  // const product = productController(Product);
  const list = listController(Product);

  router.route('/')
    .get(list.getMethod);

  /* router.route('/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod); */

  return router;
}

module.exports = routes;
