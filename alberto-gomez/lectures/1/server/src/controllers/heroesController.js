/* eslint-disable linebreak-style */
function heroesController(Hero) {
  function getMethod(req, res) {
    const query = {};
    Hero.find(query, (errorFindHeroes, heroes) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      }
      res.json(heroes);
    });
  }

  function putMethod(req, res) {
    console.log(req);
    const heroNumId = +req.query.id;
    const heroNameName = req.query.name;
    const query = { id: heroNumId, name: heroNameName };
    Hero.create(query, (errorFindHero, hero) => {
      if (errorFindHero) {
        res.send(errorFindHero);
      } else {
        res.send(hero);
      }
    });
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = heroesController;
