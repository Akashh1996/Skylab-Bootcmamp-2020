const express = require('express');
const heroes = require('../api/heroes.json');
const heroRouter = express.Router();
function routes() {
	heroRouter.route('/').get((req, res) => {
		res.status(200);
		res.send(heroes);
	});
	heroRouter.route('/').post((req, res) => {
		const newHero = {
			id: 22,
			name: 'Clitoria'
		};
		heroes.push(newHero);
		res.send(heroes);
	});
	heroRouter.route('/').delete((req, res) => {
		heroes.shift();
		res.send(heroes);
	});
	heroRouter.route('/').put((req, res) => {
		const newHero = { id: 44, name: 'Clitoria' };
		heroes.filter((heroFilter) => heroFilter.id !== newHero.id);
		res.status(200);
		res.send(heroes);
	});
	heroRouter.route(`/heroes/:heroId`).get((req, res) => {
		const findHero = heroId;
		heroes.find((i) => i.id === findHero);
		res.send(findHero);
	});

	return heroRouter;
}

module.exports = routes();
