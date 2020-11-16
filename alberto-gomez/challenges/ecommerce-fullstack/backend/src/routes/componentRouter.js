const express = require('express');
const endpoint = require('../api/products.json')
const shoppingCart = require('../api/shopping-cart.json')

const componentRouter = express.Router();

function routes() {
    // RETURN HEROES FROM JSON
    componentRouter.route('/').get( (req, res) => {
        try {
            const components = endpoint;
            res.status(200);
            res.send(components)

        } catch (error) {
            res.status(409);
            res.send('Error loading components')
        }
    });

    // ADD COMPONENT TO NEW ARRAY (SHOPPING CART)
    componentRouter.route('/:itemId').post((req, res) => {
    try {
        const components = endpoint;
        const itemId = components.find((item) => item.id === +req.params.itemId);
        shoppingCart[0]["shopping-cart"].push(itemId);
        res.status(200);
        res.json(shoppingCart[0]["shopping-cart"]);
    } catch (error) {
    
    // RETURN COMPONENT BY ID (DETAIL)
    }}).get((req, res) => {
        try {
            const components = endpoint;
            const itemId = components.find((item) => item.id === +req.params.itemId)
            res.status(200)
            res.send(itemId)
        } catch (error) {
            res.status(409)
            res.send('Error loading the component of your choice')
        }
    })
    
    return componentRouter;
}

module.exports = routes;

