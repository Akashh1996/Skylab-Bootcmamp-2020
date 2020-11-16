const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');
const cartController = require("../controllers/cartController")
const cartDeleteController = require("../controllers/cartDelete")

function productRouter(Product) {
  const router = express.Router();
  const product = productController(Product);
  const products = productsController(Product);
  const cart = cartController(Product)
  const cartDetele = cartDeleteController(Product)

 
  router.route('/select/:productId')
    .all(product.allMiddleware)
    .get(product.getMethod)
  router.route('/cart')
    .post(cart.postMethod)
    .get(cart.getMethod);

    router.route('/')
    .get(products.getMethod)
    .put(products.putMethod);
    router.route("/cart/:productId")
    .delete(cartDetele.deleteMethod)




  return router;
}

module.exports = productRouter;
