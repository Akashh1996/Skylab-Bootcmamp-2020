const express = require('express');
const axios = require('axios');
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
			const { name } = req.body;
			let id;
			if (name) {
				id = heroes[heroes.length - 1].id + 1
			}
			heroes.push({ id, name });
			res.send(heroes);
		})
		.delete((req, res) => {
			const { id } = req.query;
			let hero = heroes.find((hero) => hero.id === +id);
			if (hero) {
				heroes.splice(heroes.indexOf(hero), 1);
			}
			res.send(heroes);
		})
		.patch((req, res) => {
			const { id } = req.query;
			const newHero = { id: 13, name: 'Paco' };
			let hero = heroes.find((hero) => hero.id === newHero.id);
			if (hero) {
				heroes.splice(heroes.indexOf(hero), 1, newHero);
			}
			res.send(heroes);
		});

	heroRouter.route('/:heroId').get((req, res) => {
		const { heroId } = req.params;
		console.log(req);
		let hero = heroes.find((hero) => hero.id === +heroId);
		if (hero) {
			res.send(hero);
		}
	});
	return heroRouter;
}

module.exports = routes;
