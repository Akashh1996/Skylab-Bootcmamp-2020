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
			const newHero = { id: 30, name: 'caralio' };
			heroes.push(newHero);
			res.send(heroes);
		})
		.delete((req, res) => {
			heroes.shift();
			res.send(heroes);
		})
		.put((req, res) => {
			const newHero = { id: 69, name: 'caralio' };
			heroes.filter((heroFilter) => heroFilter.id !== newHero.id);
			res.status(200);
			res.send(heroes);
		});
	return heroRouter;
}
module.exports = routes;
module.exports = routes();
