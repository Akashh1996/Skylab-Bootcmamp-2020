const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			const sum = 2 + 2;
			console.log('Receiving get request');
			res.send('hola');
		})
		.post((req, res) => {
			res.send('POST method!!');
		});

	routerTest
		.route('/list')
		.get((req, res) => {
			res.send('Toma la lista');
		})
		.post((req, res) => {
			res.send('Has hecho algo en la lista');
		});

	return routerTest;
}

module.exports = routes;
