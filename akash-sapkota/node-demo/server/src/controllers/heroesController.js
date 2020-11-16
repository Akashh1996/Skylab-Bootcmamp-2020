function heroesController(Hero) {
  function getMethod(req, res) {
    const query = {}; // no necesito buscar un heroe por eso envio todo y pongo query vacio
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
