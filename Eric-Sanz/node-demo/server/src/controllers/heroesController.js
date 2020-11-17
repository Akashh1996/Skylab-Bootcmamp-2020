function heroesController(Hero) {
  function getMethod(req, res) {
    const query = {};
    Hero.find(query, (errorFindHeroes, heroes) => ((errorFindHeroes)
      ? res.send(errorFindHeroes) : res.json(heroes)));
  }

  function putMethod(req, res) {
    const query = {};
    Hero.create(query, (errorFindHeroes, newHero) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      } else {
        res.json(newHero);
      }
    });
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = heroesController;
