const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			res.send('Hola, si funciona');
		})
		.post((req, res) => {
			res.post('hola soy un post');
		});
	return routerTest;
}
module.exports = routes;
