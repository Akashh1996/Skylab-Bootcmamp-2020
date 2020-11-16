/* eslint-disable linebreak-style */
function heroController(Hero) {
  function getMethod(req, res) {
    const heroNumId = +req.params.heroId;
    const query = { id: heroNumId };
    Hero.find(query, (errorFindHeroes, hero) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      } else {
        res.send(hero);
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
    const heroNumId = +req.params.heroId;
    const query = { id: heroNumId };
    Hero.findOneAndRemove(query, (errorFindHero, hero) => {
      if (errorFindHero) {
        res.send(errorFindHero);
      } else {
        res.send(hero);
      }
    });
  }

  /*   function allMiddleware(req, res, next) {
    req.hero = Hero.getHeroById(+req.params.heroId);
    next();
  } */

  return {
    getMethod, postMethod, deleteMethod, /* allMiddleware */
  };
}

module.exports = heroController;
