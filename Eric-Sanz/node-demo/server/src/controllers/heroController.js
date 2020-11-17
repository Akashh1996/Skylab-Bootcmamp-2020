function heroController(Hero) {
  function getMethod(req, res) {
    res.json(req.hero);
  }

  function allMiddleware(req, res, next) {
    const query = { id: +req.params.heroId };
    Hero.findOne(query, (errorFindHeroes, hero) => {
      if (errorFindHeroes) {
        return res.send(errorFindHeroes);
      }
      req.hero = hero;
      return next();
    });
  }

  function postMethod(req, res) {
    const searchQuery = { id: req.hero.id };
    const updateQuery = { name: req.body.name };

    Hero.findOneAndUpdate(searchQuery, updateQuery, (errorFindHeroes, modifiedHero) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      } else {
        res.json(modifiedHero);
      }
    });
  }

  function deleteMethod(req, res) {
    const id = +req.params.heroId;

    Hero.deleteHero(id);

    res.json(Hero.getHeroes());
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = heroController;
