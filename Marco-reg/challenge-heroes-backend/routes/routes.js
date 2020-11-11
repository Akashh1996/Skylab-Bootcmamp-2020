const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest.route('/').get((req, res) => {
		res.send('Hola, si que funciono');
	});
	routerTest.route('/').post((req, res) => {
		res.send('SUP YOU FUCKING CUNTS');
	});
	routerTest.route('/clitoria').get((req, res) => {
		res.send('Hola, si que funciono');
	});
	routerTest.route('/clitoria').post((req, res) => {
		res.send('SUP YOU FUCKING CUNTS');
	});
	routerTest.route('/glanduin').put((req, res) => {
		res.send('Hola, si que funciono');
	});
	routerTest.route('/glanduin').delete((req, res) => {
		res.send('SUP YOU FUCKING CUNTS');
	});
	return routerTest;
}

module.exports = routes();
