function heroController(Hero) {
  function allMiddleware(req, res, next) {
    req.hero = +req.params.heroId;
    next();
  }

  function getMethod(req, res) {
    const query = { id: req.hero };
    Hero.find(query, (error, actualHero) => {
      if (error) {
        res.send(error);
      } else {
        const hero = actualHero[0];
        res.render('detail', { hero });
      }
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

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = heroController;
