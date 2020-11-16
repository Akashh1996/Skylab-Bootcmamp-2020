const express = require('express');
const axios = require('axios');

const pokeRouter = express.Router();

function routes() {
	pokeRouter
		.route('/')
		.get(async (req, res) => {
			console.log('GET METHOD!!!');
			const endpoint = '../api/heroes.json';
			const pokemons = require(endpoint);
			res.send(pokemons);
		})
		.post((req, res) => {
			console.log('Recieving post');
		});

	pokeRouter.route('/:pokeid');
	return pokeRouter;
}

module.exports = routes;
