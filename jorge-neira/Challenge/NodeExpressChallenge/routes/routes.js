const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			res.send('Funciona GET');
		})
		.post((req, res) => {
			res.send('Funciona POST');
		})
		.put((req, res) => {
			res.send('Funciona PUT');
		});

	routerTest
		.route('/jorge')
		.get((req, res) => {
			res.send('Funciona GET Jorge');
		})
		.post((req, res) => {
			res.send('Funciona POST Jorge');
		})
		.put((req, res) => {
			res.send('Funciona PUT Jorge');
		});

	return routerTest;
}
module.exports = routes();
