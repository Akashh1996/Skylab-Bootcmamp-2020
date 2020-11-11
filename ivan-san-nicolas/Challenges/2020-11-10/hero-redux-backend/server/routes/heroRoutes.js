const express = require('express');
const heroRouter = express.Router();
let heroes = require('../api/heroes.json');

function routes() {
	heroRouter.route('/').get((req, res) => {
		res.status(200);
		res.send(heroes);
    })
    .post((req, res) => {
        const hero = {id: 25, name: 'Iván'};
        heroes.push(hero);
		res.status(200);
		res.send(heroes);
    })
    .delete((req, res) => {
        const heroId = 12;
        let newHeroes = heroes.filter((hero) => 
            hero.id !== heroId
        );
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