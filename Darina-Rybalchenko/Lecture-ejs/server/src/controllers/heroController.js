function heroController(Hero) {
  function getMethod(req, res) {
    const { hero } = req;
    Hero.findOne({ id: hero }, (errorFindHero, heroFounded) => {
      if (errorFindHero) {
        return res.send(errorFindHero);
      }
      res.render('detail', { heroFounded });
    });
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

  function allMiddleware(req, res, next) {
    req.hero = +req.params.heroId;
    next();
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = heroController;
