function heroesController(Hero) {
  function getMethod(req, res) {
    const query = {};
    Hero.find(query, (errorFindHeroes, heroes) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      }

      res.render('heroes', { heroes });
    });
  }

  function putMethod(req, res) {
    const hero = new Hero(req.body);

    hero.save((error, heroSaved) => (error ? res.send(error) : res.json(heroSaved)));
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = heroesController;
