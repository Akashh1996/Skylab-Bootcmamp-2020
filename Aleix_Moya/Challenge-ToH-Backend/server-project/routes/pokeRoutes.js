const express = require('express');
const axios = require('axios');

const pokeRouter = express.Router();
const endpoint = require('../../api/heroes.json')
function routes() {
	pokeRouter
		.route('/')
		.get(async (req, res) => {
			try {
				const pokemons = await axios(endpoint);
				res.status(200);
				res.send(pokemons.data);
			} catch (error) {
				res.status(409);
				res.send('Error loading heroes...');
			}
		})
		.post((req, res) => {
			try {
				const {name} = req.body;
				const newId = Math.max.apply(null, endpoint.map((thisHero)=>{ thisHero.id})+1);
				endpoint.push({id: newId, name})
				res.status(200)
				res.send(endpoint)
			} catch (error) {
				res.send('Error adding hero, try again')
			}
		})
		.delete((req, res) =>{
			const {id} = req.query;
			const heroId = endpoint.findIndex((hero) => hero.id === +id);
			endpoint.splice(heroId, 1);
			res.status(200);
			res.send(endpoint)
		})
		.patch((req, res) => {
			const { id, name } = req.query;
			const heroId = endpoint.findIndex((hero) => hero.id === +id);
			endpoint[heroId].name = name;
			res.status(200);
			res.send(endpoint);
		});
	pokeRouter
		.route('/:pokeid');
	return pokeRouter;
}

module.exports = routes;
