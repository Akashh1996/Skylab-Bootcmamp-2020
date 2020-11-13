const express = require('express');
const heroes = require('../api/heroes.json');

const heroRouter = express.Router();

function routes() {
	heroRouter
		.route('/')
		.get((request, response) => {
			response.status(200);
			response.send(heroes);
		})
		.post((request, response) => {
			// const { id, name } = request.query;
			const hero = { id: 69, name: 'Ferran' };
			heroes.push(hero);
			response.status(200);
			response.send(heroes);
		})
		.put((request, response) => {
			const newHero = { id: 12, name: 'Momo' };
			heroes.forEach((hero) => {
				hero.id === newHero.id ? (hero.name = newHero.name) : hero;
			});
			response.status(200);
			response.send(heroes);
		})
		.delete((request, response) => {
			const { id } = request.query;
			let hero = heroes.find((hero) => hero.id === id);
			heroes.splice(heroes.indexOf(hero), 1);
			response.status(200);
			response.send(heroes);
		});
	// pokeRouter.route('/:pokeid');
	return heroRouter;
}

module.exports = routes();
