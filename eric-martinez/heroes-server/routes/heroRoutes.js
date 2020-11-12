const { response } = require('express');
const express = require('express');

const heroes = require('../api/heroes.json');

const heroRouter = express.Router();

function routes() {
	heroRouter
		.route('/')
		.get((req, res) => {
			res.status(200);
			res.send(heroes);
		})
		.post((req, res) => {
			const hero = { id: 100, hero: 'Darina' };
			heroes.push(hero);
			res.status(200);
			res.send(heroes);
		})
		.put((req, res) => {
			const newHero = { id: 12, name: 'Darina' };
			heroes.filter((heroFilter) => heroFilter.id !== newHero.id);
			res.status(200);
			res.send(heroes);
		})
		.delete((req, res) => {
			const newHero = { id: 12, name: 'Narco' };
			let hero = heroes.find((hero) => hero.id == newHero.id);
			if (hero) {
				heroes.splice(heroes.indexOf(hero), 1);
			}
			res.send(heroes);
		});
	return heroRouter;
}

module.exports = routes;
