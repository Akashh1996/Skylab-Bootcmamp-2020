/* eslint-disable no-console */
const express = require('express');

const productRouter = express.Router();
const products = require('../../api/products.json');

function routes() {
  productRouter
    .route('/')
    .get((req, res) => {
      res.status(200);
      res.json(products);
    });
  productRouter
    .route('/:productId')
    .get((req, res) => {
      console.log(req.params);
      const product = products.find((element) => element.id === +req.params.productId);
      res.status(200);
      res.send(product);
    });
  return productRouter;
}

module.exports = routes;
