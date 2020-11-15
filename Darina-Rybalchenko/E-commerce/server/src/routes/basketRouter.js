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
      const productIndex = products.indexOf(products.find(
        (product) => product.id === +req.params.productId,
      ));
      if (productIndex > -1) {
        products.splice(productIndex, 1);
      }
      res.status(200);
      res.json(productIndex);
    });
  return basketRouter;
}

module.exports = routes;
