const axios = require('axios');
const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			const endpoint = '../api/heroes.json';
			const heroes = require(endpoint);
			res.status(200);
			res.send(heroes);
		})
		.post((req, res) => {
			const { id, name } = { id: 21, name: 'hulk' };
			const endpoint = '../api/heroes.json';
			const heroes = require(endpoint);
			heroes.push({ id, name });
			res.send(heroes);
		})
		.patch((req, res) => {
			const endpoint = '../api/heroes.json';
			const heroes = require(endpoint);
			let id = 12;
			const name = 'Superman';
			heroes.find((hero) => hero.id === id).name = name;
			res.send(heroes);
		})
		.delete((req, res) => {
			const endpoint = '../api/heroes.json';
			let heroes = require(endpoint);
			const id = 12;
			heroes = heroes.filter((hero) => hero.id !== id);
			res.send(heroes);
		});

	routerTest.route('/heroes/:heroId').get((req, res) => {
		const endpoint = '../api/heroes.json';
		const heroes = require(endpoint);
		const id = req.params.heroId;
		const hero = heroes.find((hero) => +hero.id === +id);
		res.send(hero);
	});

	return routerTest;
}

module.exports = routes();
