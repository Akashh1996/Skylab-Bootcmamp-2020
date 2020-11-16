function heroesController(Hero) {
  function getMethod(req, res) {
    res.json(Hero.getHeroes());
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
