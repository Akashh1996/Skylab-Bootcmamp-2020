function heroController(Hero) {
  function getMethod(req, res) {
    const id = req.params.heroId;
    const query = { _id: id };

    Hero.find(query, (errorFindHeroes, actualHero) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      } else {
        const hero = actualHero[0];
        res.render('about', { hero });
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
    getMethod, postMethod, deleteMethod,
  };
}

module.exports = heroController;
