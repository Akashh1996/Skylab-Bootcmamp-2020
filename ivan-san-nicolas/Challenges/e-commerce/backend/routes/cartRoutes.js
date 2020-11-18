const express = require('express');
const cartController = require('../controllers/cartController');

function cartRouter(Cart, Sabers) {
    const router = express.Router();
    const cart = cartController(Cart, Sabers);

    router.route('/')
    .get(cart.getMethod)
    .post(cart.postMethod);
    /*.delete(cart.deleteMethod); */

    return router;
}

module.exports = cartRouter;