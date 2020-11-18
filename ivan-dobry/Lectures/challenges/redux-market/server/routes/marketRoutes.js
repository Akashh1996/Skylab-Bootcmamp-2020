/* eslint-disable array-callback-return */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');
const shoppingController = require('../controllers/shoppingController');

let shoppingList = [];

function routes(markets) {
  const marketRouter = express.Router();
  const product = productController(markets);
  const products = productsController(markets);
  const shopping = shoppingController(markets);

  marketRouter.route('/')
    .get(products.getMethod);

  marketRouter.route('/detail')
    .get(product.getMethod);

  marketRouter.route('/shoppingCart')
    .get(shopping.getMethod)
    .put((req, res) => {
      console.log('Adding shopping cart data...');
      products.map((element) => {
        if (element.id === +req.query.id) {
          shoppingList.push(element);
          res.send(shoppingList);
        }
      });
    })
    .delete((req, res) => {
      console.log('deleting a product from shopping list ...');
      shoppingList = shoppingList.filter((element) => element.id !== +req.query.id);
      res.send(shoppingList);
    });
  return marketRouter;
}

module.exports = routes;
