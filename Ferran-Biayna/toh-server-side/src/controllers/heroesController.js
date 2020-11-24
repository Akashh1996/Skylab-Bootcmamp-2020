function heroesController(Hero) {
  function getMethod(req, res) {
    const query = {};
    Hero.find(query, (errorFindHeroes, heroes) => (errorFindHeroes
      ? res.render('navigation', { heroes: errorFindHeroes }) : res.render('navigation', { heroes })));
  }

  return {
    getMethod,
  };
}

module.exports = heroesController;
