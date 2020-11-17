const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');
const basketController = require('../controllers/basketController');
const basketDeleteController = require('../controllers/basketDeleteController');

function productsRouter(Product, BasketProduct) {
  const router = express.Router();
  const product = productController(Product);
  const products = productsController(Product);
  const basket = basketController(BasketProduct);
  const deleteBasket = basketDeleteController(BasketProduct);

  router.route('/')
    .get(products.getMethod);

  router.route('/select/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod);

  router.route('/basket')
    .get(basket.getMethod)
    .put(basket.putMethod);

  router.route('/basket/:productId')
    .all(deleteBasket.allMiddleware)
    .delete(deleteBasket.deleteMethod);

  return router;
}

module.exports = productsRouter;
