const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			console.log('Receiving a GET request....');
			const sum = 2 + 2;
			console.log(sum);

			res.send(`Hola, si que funciono y envio ${sum}`);
		})
		.post((req, res) => {
			res.send('soy el POST!!');
		});
	routerTest
		.route('/pepe')
		.get((req, res) => {
			res.send('Hola, si que funcionoOOOOOOOO');
		})
		.post((req, res) => {
			res.send('soy el POST!!');
		});

	return routerTest;
}

module.exports = routes;
