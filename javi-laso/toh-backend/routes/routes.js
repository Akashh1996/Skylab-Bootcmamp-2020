const express = require('express');
const jsonData = require('../api/heroes.json');

const heroRoutes = express.Router();

function routes() {
	heroRoutes
		.route('/')
		.get((req, res) => {
			try {
				res.status(200);
				res.send(jsonData);
			} catch (error) {
				res.status(400);
				res.send('Error loading heroes b');
			}
		})
		.post((req, res) => {
			try {
				const { name } = req.body;
				const nextId =
					Math.max.apply(
						null,
						jsonData.map((hero) => hero.id)
					) + 1;
				jsonData.push({ id: nextId, name });
				res.status(201);
				res.send(jsonData);
			} catch (error) {}
		})
		.delete((req, res) => {
			const { id } = req.query;
			const heroId = jsonData.findIndex((hero) => hero.id === +id);
			jsonData.splice(heroId, 1);
			res.status(200);
			res.send(jsonData);
		})
		.patch((req, res) => {
			const { id, name } = req.query;
			const heroId = jsonData.findIndex((hero) => hero.id === +id);
			jsonData[heroId].name = name;
			res.status(200);
			res.send(jsonData);
		});

	heroRoutes
		.route('/:id')
		.get((req, res) => {
			const { id } = req.params;
			const heroObject = jsonData.find((hero) => {
				return hero.id === +id;
			});

			if (heroObject) {
				res.status(200);
				res.send(heroObject);
			} else {
				res.status(200);
				res.send('There is no hero with this id');
			}
		})
		.delete((req, res) => {
			const { id } = req.params;
			const heroId = jsonData.findIndex((hero) => {
				return hero.id === +id;
			});
			try {
				if (heroId >= 0) {
					jsonData.splice(heroId, 1);
					res.status(200);
					res.send(jsonData);
				} else {
					res.status(204);
					res.send(`There is no hero with id ${id}`);
				}
			} catch (error) {
				res.status(404);
				res.send('Error deleting');
			}
		});

	return heroRoutes;
}

module.exports = routes;
