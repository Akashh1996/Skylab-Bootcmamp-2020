/* eslint-disable no-debugger */
/* eslint-disable no-console */
const express = require('express');
const products = require('../public/store.json');

const marketRouter = express.Router();

let shoppingList = []

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

    marketRouter.route('/shoppingCart')
    .get((req, res) => {
      res.send(shoppingList)
      console.log('getting shopping cart data...');
    })
    .put((req, res) => {
      console.log('Adding shopping cart data...');
      products.map((product) => {
        if(product.id === +req.query.id) {
          shoppingList.push(product)
          res.send(shoppingList)
        }
      })
    })
    .delete((req, res) => {
      console.log('deleting a product from shopping list ...')
      shoppingList = shoppingList.filter((element) => {
        return element.id !== +req.query.id
      })
      res.send(shoppingList)
    });
  return marketRouter;
}

module.exports = routes;
