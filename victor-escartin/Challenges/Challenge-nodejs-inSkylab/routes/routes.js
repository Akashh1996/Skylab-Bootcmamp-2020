const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			res.send('Hola, si que funciono');
		})
		.post((req, res) => {
			res.send('Añadiendo cosas');
		})
		.put((req, res) => {
			res.send('Modificando cosas');
		})
		.delete((req, res) => {
			res.send('Eliminando cosas');
		});

	routerTest
		.route('/api')
		.get((req, res) => {
			res.send('Ahora desde la api');
		})
		.post((req, res) => {
			res.send('Añadiendo cosas a la api');
		})
		.put((req, res) => {
			res.send('Modificando cosas en la api');
		})
		.delete((req, res) => {
			res.send('Eliminando cosas de la api');
		});

	return routerTest;
}

module.exports = routes;
