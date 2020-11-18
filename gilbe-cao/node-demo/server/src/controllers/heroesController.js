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
    Hero.addHero(req.body);

    res.json(Hero.getHeroes());
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = heroesController;
