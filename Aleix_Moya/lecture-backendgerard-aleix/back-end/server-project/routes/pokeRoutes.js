const express = require('express');
const axios = require('axios');

const pokeRouter = express.Router();

function routes() {
	pokeRouter
		.route('/')
		.get(async (req, res) => {
			console.log('GET METHOD!!!');
			const { limit = 151, offset = 0 } = req.query;
			const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
			try {
				const pokemons = await axios(endpoint);
				res.status(200);
				res.send(pokemons.data);
			} catch (error) {
				res.status(409);
				res.send('Error loading pokemons...');
			}
		})
		.post((req, res) => {
			console.log('Recieving post');
		});
		

	pokeRouter.route('/:pokeid');
	return pokeRouter;
}

module.exports = routes;
