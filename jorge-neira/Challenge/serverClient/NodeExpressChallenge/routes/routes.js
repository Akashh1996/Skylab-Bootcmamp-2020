const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			console.log('Receiving a GET request...');
			const sum = 2 + 2;
			res.send(`Si esto funciona, la suma es ${sum}`);
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
