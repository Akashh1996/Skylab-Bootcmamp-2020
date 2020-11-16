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
			const myhero = { id: 30, name: 'HomaInvisibla' };
			heroes.push(myhero);
			res.status(200), res.send(heroes);
        })
        .put((req, res) => {
			const myhero = { id: 12, name: 'HomaInvisibla' };
			const deletehero = heroes.find((heroFilter) => heroFilter.id == myhero.id);
			heroes.splice(heroes.indexOf(deletehero),1, myhero);
			res.status(200), res.send(heroes);
		})
		.delete((req, res) => {
			const myhero = { id: 12, name: 'HomaInvisibla' };
			const deletehero = heroes.find((heroFind) => heroFind.id == myhero.id);
			heroes.splice(heroes.indexOf(deletehero),1);
			res.status(200), res.send(heroes)
		})

	return heroRouter
}

module.exports=heroRoutes
