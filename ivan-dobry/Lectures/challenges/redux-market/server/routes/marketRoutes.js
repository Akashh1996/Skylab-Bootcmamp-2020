/* eslint-disable no-debugger */
/* eslint-disable no-console */
const express = require('express');
const products = require('../public/store.json');

const marketRouter = express.Router();

function routes() {
  marketRouter.route('/')
    .get((req, res) => {
      res.send(products);
      console.log('getting products data...');
    });

    marketRouter.route('/detail')
    .get((req, res) => {
      products.map((product) => {
       if (product.id === +req.query.id) {
        res.send(product)
       }
      })
      console.log('getting product detail data...');
    });
  return marketRouter;
}

module.exports = routes;
