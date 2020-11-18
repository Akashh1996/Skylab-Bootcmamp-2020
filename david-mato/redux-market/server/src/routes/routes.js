const express = require('express');
const productsController = require('../controllers/controller');

function productsRouter(Products) {
  const router = express.Router();
  const products = productsController(Products);

  router.route('/')
    .get(products.getMethod)
    .post(products.postMethod)
    .put(products.putMethod)
    .delete(products.deleteMethod);

  // router.route('/:productId')
  //   .all(hero.allMiddleware)
  //   .get(hero.getMethod)
  //   .post(hero.postMethod)
  //   .delete(hero.deleteMethod);

  return router;
}

module.exports = productsRouter;
