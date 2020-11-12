const express = require('express');
const axios = require('axios');
let heroes = require('../api/heroes.json');

const heroRouter = express.Router();

function routes() {
	// OBTENER HEROES
	heroRouter.route('/').get((req, res) => {
		console.log(req);
		res.status(200);
		res.send(heroes);
	});
	/* heroRouter.route('/').post((req, res) => {
		const hero = { id: 21, name: 'Alberto' };
		heroes.push(hero);
		res.status(200);
		res.send(heroes);
    }); */
	// AÑADIR UN HEROE
	heroRouter.route('/').post((req, res) => {
		console.log(req);
		const { id, name } = req.query;
		hero = { id: +id, name: name };
		heroes.push(hero);
		res.send(heroes);
	});
	// ELIMINAR UN HEROE
	heroRouter.route('/').delete((req, res) => {
		console.log(req);
		const { id } = req.query;
		heroId = { id: +id };
		const index = heroes.findIndex((hero) => +hero.id === heroId.id);
		heroes.splice(index, 1);
		res.send(heroes);
	});
	// DEVUELVE UN HEROE POR ID
	heroRouter.route('/:heroId').get((req, res) => {
		let idNumber = +req.params.heroId;
		const hero = heroes.filter((element) => element.id === idNumber);
		res.send(hero);
	});

	return heroRouter;
}

module.exports = routes;
