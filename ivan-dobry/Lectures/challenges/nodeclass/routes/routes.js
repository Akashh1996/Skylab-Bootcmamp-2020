const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			res.send('Hola, si que funciono');
		})
		.post((req, res) => {
			res.send('este es el Post');
		});

	routerTest
		.route('/pepe')
		.get((req, res) => {
			res.send('Pepe get');
		})
		.post((req, res) => {
			res.send('Pepe Post');
		});

	return routerTest;
}

module.exports = routes;
