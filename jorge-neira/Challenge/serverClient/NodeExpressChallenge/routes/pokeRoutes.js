const express = require('express');
const axios = require('axios');
const { restart } = require('nodemon');
const { post } = require('./routes');

const pokeRouter = express.Router();

function routes() {
	pokeRouter
		.route('/')
		.get(async (req, res) => {
			console.log(req);
			const { limit, offset } = req.query;
			const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
			try {
				const pokemons = await axios(endpoint);
				console.log(pokemons);
				res.status(200);
				res.send(pokemons.data);
			} catch (error) {
				res.status(409);
				res.send('Error loading pokemons...');
			}
		})
		.post((req, res) => {
			console.log('Recieving');
		});
	return pokeRouter;
}

module.exports = routes('/:pokeid');
