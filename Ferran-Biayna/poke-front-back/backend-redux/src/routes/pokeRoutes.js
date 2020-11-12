const express = require('express');
const axios = require('axios');

const pokeRouter = express.Router();

function routes() {
	pokeRouter.route('/').get(async(req, res) => {
		const { limit, offset } = req.query;
        const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        try {
            const pokemons = await axios(endpoint)
            res.status(200);
            res.send(pokemons.data)
        } catch (error) {
            res.status(409);
            res.end('Error loading pokemons...')
        }
	});

	return pokeRouter;
}

module.exports = routes();
