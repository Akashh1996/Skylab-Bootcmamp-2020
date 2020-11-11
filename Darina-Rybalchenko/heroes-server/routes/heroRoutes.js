const express = require('express');
const axios = require('axios');

const heroRouter = express.Router();
const heroes = require('../api/heroes.json')

function routes() {
    heroRouter
        .route('/')
        .get((req, res) => {
            res.status(200);
            res.send(heroes);
        })
        .post((req, res) => {
            const hero = { id: 21, hero: 'Eric' }
            heroes.push(hero)
            res.send(heroes)
        })
        .put((req, res) => {
            const newHero = { id: 12, name: 'Eric' }
            heroes.forEach((hero) => {
                if (hero.id === newHero.id) {
                    hero.name = newHero.name
                }
                res.send(heroes)
            })
        })
        .delete((req, res) => {
            const heroIndex = heroes.indexOf(heroes.find((hero) => hero.id === 12))
            if (heroIndex > -1) {
                heroes.splice(heroIndex, 1)
            }
            res.send(heroes)
        })
    heroRouter.route('/:heroid').get((req, res) => {
        res.send(heroes)
    })
    return heroRouter;
}

module.exports = routes;