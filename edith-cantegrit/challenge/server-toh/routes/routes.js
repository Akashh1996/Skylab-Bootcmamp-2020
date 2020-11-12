const express = require('express');

const heroes = require('../api/heroes.json');

const heroRouter = express.Router();

function heroRoutes() {
	heroRouter
		.route('/')
		.get((req, res) => {
			res.status(200), res.send(heroes);
		})
		.post((req, res) => {
			const myhero = { id: 30, hero: 'HomaInvisibla' };
			heroes.push(myhero);
			res.status(200), res.send(heroes);
        })
        .put((req, res) => {
			const myhero = { id: 12, hero: 'HomaInvisibla' };
			heroes.filter((heroFilter) => heroFilter.id !== myhero.id);
			res.status(200), res.send(heroes);
        })
        .delete((){})
}
