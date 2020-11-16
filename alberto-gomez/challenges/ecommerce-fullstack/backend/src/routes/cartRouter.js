const express = require('express');
const shoppingCart = require('../api/shopping-cart.json');

const cartRouter = express.Router();

function routes() {

    cartRouter.route('/items').get((req, res) => {
        try {
            const shoppingCartItems = shoppingCart;
            res.status(200);
            res.send(shoppingCartItems);
        } catch (error) {
            res.status(409);
            res.send('Error loading the shopping cart')
        }
    })
    return cartRouter;
}

module.exports = routes;