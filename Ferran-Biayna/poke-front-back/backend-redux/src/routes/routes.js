const express = require('express');

const routerTest = express.Router();

function routes() {
	routerTest
		.route('/')
		.get((req, res) => {
			res.end('Hola, funciona el GET');
		})
		.post((req, res) => {
			res.end('Hola, funciona el POST');
        })
        .put((req, res) => {
            res.end('Hola, funciona el PUT');
        })
        .delete((req, res) => {
            res.end('Hola, funciona el DEL');
        })

        routerTest
		.route('/user')
		.get((req, res) => {
			res.end('Hola, funciona el GET de user');
		})
		.post((req, res) => {
			res.end('Hola, funciona el POST de user');
        })
        .put((req, res) => {
            res.end('Hola, funciona el PUT de user');
        })
        .delete((req, res) => {
            res.end('Hola, funciona el DEL de user');
        })

	return routerTest;
}

module.exports = routes();
