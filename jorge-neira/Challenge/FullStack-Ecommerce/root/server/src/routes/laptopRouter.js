const express = require('express');
const productDetailController = require('../controllers/productDetailController');

function laptopRouter(Laptop, Specs) {
  const router = express.Router();
  const product = productDetailController(Laptop, Specs);

  router.route('/product/:productName')
    .get(product.getMethod);

  return router;
}

module.exports = laptopRouter;
