const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			res.send('Funciona');
		})
		.post((req, res) => {
			res.send('POST method!!');
		});

	return routerTest;
}

module.exports = routes;
