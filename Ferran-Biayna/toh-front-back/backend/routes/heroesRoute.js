const express = require('express');
const heroes = require('../api/heroes.json');

const heroesRoute = express.Router();

function routes() {
	heroesRoute
		.route('/')
		.get((req, res) => {
			res.send(heroes);
		})
		.post((req, res) => {
			const hero = req.body.params;
			heroes.push(hero) && res.send(heroes);
		})
		.put((req, res) => {
			const heroId = +req.body.params.id;
			const heroName = req.body.params.name;
			heroes.map((hero) => {
				hero.id === heroId ? (hero.name = heroName) : hero;
			}) && res.send(heroes);
		})
		.delete((req, res) => {
			const heroId = +req.query.id;
			heroes.splice(
				heroes.findIndex((hero) => hero.id === heroId) === -1
					? 0
					: heroes.findIndex((hero) => hero.id === heroId),
					heroes.findIndex((hero) => hero.id === heroId) === -1
					? 0
					: 1,
			) && res.send(heroes);
		});

	heroesRoute.route('/:heroId').get((req, res) => {
		console.log(req);
		const hero = heroes.find((one_hero) => one_hero.id === +req.params.heroId);
		res.send(hero);
	});

	return heroesRoute;
}

module.exports = routes();
