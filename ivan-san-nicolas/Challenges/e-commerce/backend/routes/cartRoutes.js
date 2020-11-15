const express = require('express');
let cart = require('../api/cart.json');

const cartRouter = express.Router();

function routes() {
    cartRouter.route('/')
    .get((req, res) => {
        res.status(200);
        res.send(cart);
    })
    .post((req, res) => {
        const product = req.query.productName;
        res.status(200);
        res.send(cart);
    })
    .delete((req, res) => {
        console.log(req);
        const productName = req.query.productName[0];
        const newCart = [];
        let repeatedProducts = 0;
        cart[0]["product-list"].map((product) => {
            if(product["product-name"] !== productName || repeatedProducts > 0) {
                newCart.push(product);
            } else {
                repeatedProducts++;
            }
        });
        console.log(newCart);
        cart[0]["product-list"] = newCart;
        res.status(200);
        res.send(cart);
    });
    
    return cartRouter
}

module.exports = routes;