function heroController(Hero) {
  function getMethod(req, res) {
    const { heroId } = req.params;
    Hero.findById(heroId, (errorFindHero, hero) => (errorFindHero
      ? res.render('detail', { hero: errorFindHero }) : res.render('detail', { hero })));
  }

  return {
    getMethod,
  };
}

module.exports = heroController;
