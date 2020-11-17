function heroesController(Hero) {
  function getMethod(req, res) {
    const query = {};
    Hero.find(query, (errorFindHeroes, heroes) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      } else {
        res.json(heroes);
      }
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    Hero.create(query, (errorFindHeroes, heroes) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      } else {
        res.json(heroes);
      }
    });
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = heroesController;
