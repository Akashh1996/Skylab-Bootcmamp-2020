const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((request, response) => {
			console.log('Receiving a GET request');
			const sum = 2 + 2;
			console.log(sum);
			response.send(`Route working and sending ${sum}!`);
		})

		.post((request, response) => {
			response.send('Post route working!');
		})

		.put((request, response) => {
			response.send('Put route working!');
		})

		.patch((request, response) => {
			response.send('Patch route working!');
		})

		.delete((request, response) => {
			response.send('Delete route working!');
		});

	routerTest
		.route('/second')
		.get((request, response) => {
			response.send('Second Route working!');
		})

		.post((request, response) => {
			response.send('Second Post route working!');
		})

		.put((request, response) => {
			response.send('Second Put route working!');
		})

		.patch((request, response) => {
			response.send('Second Patch route working!');
		})

		.delete((request, response) => {
			response.send('Second Delete route working!');
		});

	return routerTest;
}

module.exports = routes();
