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
        let heroName = req.query;
        let id = Math.random();
        let hero = { id: id(), name: heroName }
        heroes.push(hero);
		res.status(200);
		res.send(heroes);
    })
    .delete((req, res) => {
        let id = req.query;
        let heroId = heroes.findIndex((hero) => hero.id === +id);
        heroes.splice(heroId, 1);
        res.status(200);
        res.send(heroes);
    })
    .patch((req, res) => {
        let id = req.query[0];
        let name = req.query[1];
        heroes.map((hero) => {
            if(hero.id === id){
                hero.name = name;
                return hero;
            }
            return hero;
        })
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