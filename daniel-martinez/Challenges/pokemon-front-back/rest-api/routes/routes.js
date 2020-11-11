const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			console.log('Receiving a GET request...');
			res.send('Hola, si que funciono');
		})
		.post((req, res) => {
			res.write('Hey\n');
			res.end('Soy el post y funciono');
		});

	routerTest.route('/pepe').get((req, res) => {
		res.send('Hola, soy pepe');
	});

	return routerTest;
}

module.exports = routes();
