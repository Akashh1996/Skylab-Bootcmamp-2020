const express = require('express');
const dataJson = require('../api/heroes.json');

const detailRoute = express.Router();

function routes() {
	detailRoute.route('/').get((req, res) => {
		const { id } = req.query;
		const dataJsonHeroId = dataJson.find((heroId) => heroId.id === +id);
		res.send(dataJsonHeroId);
	});

	return detailRoute;
}

module.exports = routes();
