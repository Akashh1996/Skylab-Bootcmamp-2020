const express = require('express');
const heroRouter = express.Router();
let heroes = require('../api/heroes.json');

function routes() {
    heroRouter.route('/')
    .get((req, res) => {
		res.status(200);
		res.send(heroes);
    })
    .post((req, res) => {
        hero = req.query;
        heroes.push(hero);
		res.status(200);
		res.send(heroes);
    })
    .delete((req, res) => {
        const id = req.query;
        const heroId = heroes.findIndex((hero) => hero.id === +id);
        heroes.splice(heroId, 1);
        res.status(200);
        res.send(heroes);
    })
    .put((req, res) => {
        const heroId = 13;
        const newName = 'Bombasto Deprecated';
        let newHeroes = [];
        heroes.map((hero) => {
            if(hero.id !== heroId) {
                newHeroes.push(hero);
            } else {
                hero.name = newName;
                newHeroes.push(hero);
            }
        });
        heroes = [...newHeroes];
        res.status(200);
        res.send(heroes);
    })
    
    heroRouter.route('/:heroId').get((req, res) => {
        const heroId = +req.params.heroId;
        const hero = heroes.find((hero) => hero.id === heroId)
        res.status(200);
        res.send(hero); 
    });
	return heroRouter;
}
module.exports = routes;