const express = require('express');
const axios = require('axios');

const heroRouter = express.Router();

let heroes = [
	{
		id: 11,
		name: 'Dr Nice'
	},
	{
		id: 12,
		name: 'Narco'
	},
	{
		id: 13,
		name: 'Bombasto'
	},
	{
		id: 14,
		name: 'Celeritas'
	},
	{
		id: 15,
		name: 'Magneta'
	},
	{
		id: 16,
		name: 'RubberMan'
	},
	{
		id: 17,
		name: 'Dynama'
	},
	{
		id: 18,
		name: 'Dr IQ'
	},
	{
		id: 19,
		name: 'Magma'
	},
	{
		id: 20,
		name: 'Tornado'
	}
];

function routes() {
	heroRouter
		.route('/')
		.get((req, res) => {
			console.log('getting data...');
			res.status(200);
			res.send(heroes);
		})
		.post((req, res) => {
			const { id, name } = req.query;
			heroes.push({ id: +id, name: name });
			res.send(heroes);
		})
		.delete((req, res) => {
			const { id, name } = req.query;
			heroes = heroes.filter((element) => {
				return element.id !== +id;
			});
			heroes = heroes.filter((element) => {
				return element.name !== name;
			});
			res.send(heroes);
		})
		.patch((req, res) => {
			const { id, name } = req.query;
			heroes.map((element) => {
				if (element.id === +id) {
					element.name = name;
				}
			});
			res.send(heroes);
		});

	heroRouter.route('/:heroId').get((req, res) => {
		let id = +req.params.heroId;
		let hero = heroes.filter((element) => {
			return element.id === id;
		});
		res.send(hero);
	});

	return heroRouter;
}

module.exports = routes;
