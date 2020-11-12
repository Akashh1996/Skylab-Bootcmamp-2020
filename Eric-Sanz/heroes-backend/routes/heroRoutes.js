const express = require('express');
const heroes = require('../api/heroes.json');

const heroRouter = express.Router();

function routes() {
	heroRouter
		.route('/')
		.get((request, response) => {
			response.send(heroes);
		})
		.post((request, response) => {
			// const { id, name } = request.query;
			const hero = { id: 69, name: 'Ferran' };
			heroes.push(hero);
			response.send(heroes);
		})
		.put((request, response) => {
			const newHero = { id: 12, name: 'Momo' };
			heroes.forEach((hero) => {
				hero.id === newHero.id ? (hero.name = newHero.name) : hero;
			}) && response.send(heroes);
		})
		.delete((request, response) => {
			const { id } = req.query;
			const heroId = heroes.findIndex((hero) => hero.id === +id);
			heroes.splice(heroId, 1);
			res.status(200);
			response.send(heroes);
		});
	// pokeRouter.route('/:pokeid');
	return heroRouter;
}

module.exports = routes();
