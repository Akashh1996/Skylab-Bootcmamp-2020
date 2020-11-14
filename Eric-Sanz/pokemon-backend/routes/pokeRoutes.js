const express = require('express');
const axios = require('axios');

const pokeRouter = express.Router();

function routes() {
	pokeRouter.route('/').get(async (request, response) => {
		// console.log(request);
		const { limit = 151, offset = 0 } = request.query;
		const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
		try {
			const pokemons = await axios(endpoint);
			response.status(200);
			response.send(pokemons.data);
		} catch (error) {
			response.status(409);
			response.send('Error loading Pokemons...');
		}
	});
	pokeRouter.route('/:pokeid');
	return pokeRouter;
}

module.exports = routes();
