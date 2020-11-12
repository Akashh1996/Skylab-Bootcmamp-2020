const express = require('express');
const dataJson = require('../api/heroes.json');

const detailRoute = express.Router();

function routes() {
	detailRoute.route('/heroes').get((req, res) => {
		console.log(req.params);
		console.log(req);
		const { id } = req.params;
		const dataJsonHeroId = dataJson.find((heroId) => heroId.id === +id);
		res.send(dataJsonHeroId);
	});

	return detailRoute;
}

module.exports = routes();
