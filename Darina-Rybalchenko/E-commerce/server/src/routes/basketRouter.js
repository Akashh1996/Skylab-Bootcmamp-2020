/* eslint-disable no-console */
const express = require('express');
const basketController = require('../controllers/basketController');
const basketProductController = require('../controllers/basketProductController');

function basketRouter(Basket, Product) {
  const router = express.Router();
  const basket = basketController(Basket);
  const basketProduct = basketProductController(Basket, Product);

  router.route('/')
    .get(basket.getMethod);

  router.route('/:productId')
    .all(basketProduct.allMiddleware)
    .post(basketProduct.postMethod)
    .delete(basketProduct.deleteMethod);

  return router;
}

module.exports = basketRouter;
