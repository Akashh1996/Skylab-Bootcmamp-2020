const express = require('express');
let cart = require('../api/cart.json');
let sabers = require('../api/sabers.json');

const cartRouter = express.Router();

function routes() {
    cartRouter.route('/')
    .get((req, res) => {
        res.status(200);
        res.send(cart);
    })
    .post((req, res) => {
        const productName = req.query.productName;
        const productColor = req.query.productColor;
        let cartProduct = null;
        sabers.map((product) => {
            if(product["product-name"] === productName) {
                let newProduct = product;
                newProduct["actual-color"] = productColor;
                cartProduct = newProduct;
            }
        });
        cart[0]["product-list"].push(cartProduct);
        res.status(200);
        res.send(cart);
    })
    .delete((req, res) => {
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
        cart[0]["product-list"] = newCart;
        res.status(200);
        res.send(cart);
    });
    
    return cartRouter
}

module.exports = routes;