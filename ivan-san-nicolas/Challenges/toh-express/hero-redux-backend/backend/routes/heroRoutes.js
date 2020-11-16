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
        let heroName = req.body.params.name;
        let id = Math.random();
        let hero = { id, name: heroName }
        heroes.push(hero);
		res.status(200);
		res.send(heroes);
    })
    .delete((req, res) => {
        let id = req.query.id;
        console.log(req);
        let heroId = heroes.findIndex((hero) => hero.id === +id);
        heroes.splice(heroId, 1);
        res.status(200);
        res.send(heroes);
    })
    .patch((req, res) => {
        console.log(req);
        let id = req.body.params.id;
        let name = req.body.params.newName;
        heroes = heroes.map((hero) => {
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