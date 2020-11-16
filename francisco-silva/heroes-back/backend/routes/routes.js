const express = require('express');
const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			console.log('receiving a Get request...');
			res.send('SOU GET CARA');
		})
		.post((req, res) => {
			res.send('sou POST MODERN');
		});
	routerTest
		.route('/heroes')
		.get((req, res) => {
			res.send('get dos heroes');
		})
		.post((req, res) => {
			res.send('post dos heroes');
		});
	return routerTest;
}
module.exports = routes;
