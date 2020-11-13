const express = require('express');
const products = require('../api/products.json');

const productRouter = express.Router();

function routes() {
  productRouter
    .route('/')
    .get((req, res) => {
      res.status(200);
      res.send(products);
    })
    .post((req, res) => {
      const newProduct = { id: 30, name: 'caralio' };
      products.push(newProduct);
      res.send(products);
    })
    .delete((req, res) => {
      products.shift();
      res.send(products);
    })
    .put((req, res) => {
      const newProduct = { id: 69, name: 'caralio' };
      products.filter((productFilter) => productFilter.id !== newProduct.id);
      res.status(200);
      res.send(products);
    });
  return productRouter;
}
module.exports = routes;
module.exports = routes();
