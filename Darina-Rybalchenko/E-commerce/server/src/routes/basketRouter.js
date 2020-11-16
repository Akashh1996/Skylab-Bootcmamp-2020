/* eslint-disable no-console */
const express = require('express');
const basketController = require('../controllers/basketController');
const basketProductController = require('../controllers/basketProductController');

function basketRouter(Product) {
  const router = express.Router();
  const basket = basketController(Product);
  const basketProduct = basketProductController(Product);

  router.route('/')
    .get(basket.getMethod);

  router.route('/:productId')
    .all(basketProduct.allMiddleware)
    .post(basketProduct.postMethod)
    .delete(basketProduct.deleteMethod);

  return router;
}

module.exports = basketRouter;
