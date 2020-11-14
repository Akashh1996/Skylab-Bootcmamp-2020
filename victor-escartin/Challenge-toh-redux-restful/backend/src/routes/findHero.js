//Página test ROUTER
const { Router } = require("express");
const router = new Router();
const searching = require("underscore");

const heroes = require("./../heroesDB.json");

router.get("/:heroId", (req, res) => {
  let id = +req.params.heroId;
  let hero = heroes.filter((element) => {
    return element.id === id;
  });
  res.send(hero);
});

module.exports = router;
