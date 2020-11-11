const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			res.send('Hola, nodemon no funciona o si');
		})
		.post((req, res) => {
			res.send('SOY EL POST!!');
		});

	return routerTest;
}

module.exports = routes;
