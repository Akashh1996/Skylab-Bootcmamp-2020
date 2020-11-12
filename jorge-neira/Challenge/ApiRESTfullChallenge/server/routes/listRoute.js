const express = require('express');
const dataJson = require('../api/heroes.json');

const listRoute = express.Router();

function routes() {
	listRoute
		.route('/')
		.get((req, res) => {
			try {
				res.type('application/json');
				res.json(dataJson);
			} catch (error) {}
			res.status(404);
		})
		.post((req, res) => {
			try {
				const { name } = req.query;
				const setId = Date.now();
				name && dataJson.push({ id: setId, name });
				res.status(200);
				res.send(dataJson);
			} catch (error) {
				res.status(401);
				res.send('Bad request');
			}
		})
		.patch((req, res) => {
			try {
				const { id, name } = req.query;
				const heroId = dataJson.findIndex(
					(heroRename) => heroRename.id === +id
				);
				dataJson[heroId].name = name;
				res.status(200);
				res.send(dataJson);
			} catch (error) {
				res.status(401);
				res.send('Bad request');
			}
		})
		.delete((req, res) => {
			try {
				const { id } = req.query;
				const heroIndex = dataJson.findIndex(
					(deleteHero) => deleteHero.id === +id
				);
				heroIndex !== -1 && dataJson.splice(heroIndex, 1);
				res.send(dataJson);
			} catch (error) {
				res.status(401);
				res.send('Bad request');
			}
		});

	return listRoute;
}

module.exports = routes();
