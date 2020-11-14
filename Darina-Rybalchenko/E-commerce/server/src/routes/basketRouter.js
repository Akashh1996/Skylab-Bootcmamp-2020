const express = require('express');
const products = require('../../api/products.json');

const basketRouter = express.Router();
const productsBasket = [];

function routes() {
  basketRouter
    .route('/')
    .get((req, res) => {
      res.status(200);
      res.json(productsBasket);
    });
  basketRouter
    .route('/:productId')
    .post((req, res) => {
      const product = products.find((element) => element.id === +req.params.productId);
      productsBasket.push(product);
      res.status(200);
    });
  basketRouter
    .route('/:productId')
    .delete((req, res) => {
      res.status(200);
      res.json(productsBasket);
    });
  return basketRouter;
}

module.exports = routes;
