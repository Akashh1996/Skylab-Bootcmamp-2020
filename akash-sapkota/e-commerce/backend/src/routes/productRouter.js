const express = require('express');
const productController = require('../controllers/productController');
const productsController = require('../controllers/productsController');
const cartController = require("../controllers/cartController")
const cartDeleteController = require("../controllers/cartDelete")
 
function productRouter(Product, Cart) {
  const router = express.Router();
  const product = productController(Product);
  const products = productsController(Product);
  const cart = cartController(Cart)
  const cartDetele = cartDeleteController(Cart)
 
 
  router.route('/select/:productId')
     .all(product.allMiddleware) 
    .get(product.getMethod)
    .delete(product.deleteMethod)

    router.route('/cart')
    .post(cart.postMethod)
    .get(cart.getMethod)

    router.route('/')
    .get(products.getMethod)


    router.route("/cart/:productId")
    .all(cartDetele.allMiddleware)
    .delete(cartDetele.deleteMethod)




  return router;
}

module.exports = productRouter;
