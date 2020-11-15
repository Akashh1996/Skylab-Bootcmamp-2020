const express = require('express');
const cart = require('../api/cart.json');

const cartRouter = express.Router();

function routes() {
    cartRouter.route('/')
    .get((req, res) => {
        res.status(200);
        res.send(cart);
    })
    .post((req, res) => {
        console.log(req);
        const product = req.query.product;
        res.status(200);
        res.send(cart);
    });
    
    return cartRouter
}

module.exports = routes;