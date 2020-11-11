const express = require('express');
const heroes = require('../api/heroes.json');

const pokeRouter = express.Router();

function routes() {
    pokeRouter.route('/').get((req, res) => {
            res.status(200);
            res.send(heroes);
    });
    return pokeRouter;
}

module.exports = routes;