const { default: Axios } = require('axios');
const express = require('express');
const heroes = require('../api/heroes.json');
const heroRouter = express.Router();
function routes() {
	heroRouter.route('/').get((req, res) => {
		res.status(200);
		res.send(heroes);
	});
	heroRouter.route('/').post((req, res) => {
		const {heroname, heroid} =req.headers
		const newHero={
			name: heroname, id: heroid
		}
		heroes.push(newHero);
		res.send(heroes);
	});
	heroRouter.route('/').delete((req, res) => {
		heroes.shift();
		res.send(heroes);
	});
	heroRouter.route('/').put((req, res) => {
		const newHero = { id: 44, name: 'Clitoria' };
		heroes.filter((heroFilter) => heroFilter.id !== newHero.id);
		res.status(200);
		res.send(heroes);
	});
	
	heroRouter.route("/:heroId").get((req,res)=>{
        console.log(req);
        const{heroId} = req.params
        const index = heroes.findIndex((hero)=> hero.id === +heroId)
        console.log(index);
        const heroDetail = heroes[index]
        res.send(heroDetail)
     })

	return heroRouter;
}

module.exports = routes();

