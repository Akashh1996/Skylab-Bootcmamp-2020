function heroController(Hero) {
  function allMiddleware(req, res, next) {
    req.hero = +req.params.heroId;
    next();
  }

  function getMethod(req, res) {
    console.log('hiii');
    const query = { id: req.heroId };
    Hero.find(query, (errorFindHeroes, heroNow) => {
      if (errorFindHeroes) {
        console.log(errorFindHeroes);
        res.send(errorFindHeroes);
      } else {
        const hero = heroNow[0];
        console.log(hero);
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

    res.render(updatedHero);
  }

  function deleteMethod(req, res) {
    const id = +req.params.heroId;

    Hero.deleteHero(id);

    res.render(Hero.getHeroes());
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = heroController;
