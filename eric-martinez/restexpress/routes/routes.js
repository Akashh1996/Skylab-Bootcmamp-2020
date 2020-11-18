const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			res.send('Hola, soy get y funciono!');
		})
		.post((req, res) => {
			res.send('Hola, soy post y funciono!');
		})
		.put((req, res) => {
			res.send('Hola, soy put y funciono!');
		})
		.delete((req, res) => {
			res.send('Hola, soy delete y funciono!');
		});
	routerTest.route('/pepe').get((req, res) => {
		res.send('Hola, si que funciono X2!');
	});
	return routerTest;
}

module.exports = routes;
