const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			console.log('Receiving API...');
			res.send('Hola, si funciona');
		})
		.post((req, res) => {
			res.post('hola soy un post');
		});
	return routerTest;
}
module.exports = routes;
