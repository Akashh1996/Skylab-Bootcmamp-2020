function heroController(Hero) {
  function allMiddleware(req, res, next) {
    const heroNumId = +req.params.heroId;
    const query = { id: heroNumId };
    Hero.findOne(query, (errorFindHero, hero) => {
      if (hero) {
        req.hero = hero;
        next();
      }
    });
  }

  function getMethod({ hero }, res) {
    res.json(hero);
  }

  function postMethod(req, res) {
    const updatedHero = {
      ...req.hero,
      ...req.body,
    };

    Hero.setHero(updatedHero);

    res.json(updatedHero);
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
