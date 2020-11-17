/* eslint-disable linebreak-style */
function heroController(Hero) {
  function allMiddleware(req, res, next) {
    const heroNumId = +req.params.heroId;
    const query = { id: heroNumId };
    Hero.findOne(query, (errorFindHero, hero) => {
      if (errorFindHero) {
        res.send(errorFindHero);
      } else {
        res.json(hero);
        next();
      }
    });
  }

  function getMethod(req, res) {
    const heroNumId = +req.params.heroId;
    const query = { id: heroNumId };
    Hero.find(query, (errorFindHeroes, hero) => {
      if (errorFindHeroes) {
        res.send(errorFindHeroes);
      } else {
        res.json(hero);
      }
    });
  }

  function postMethod(req, res) {
    const heroNumId = +req.params.heroId;
    const query = { id: heroNumId };
    const option = { new: true };
    Hero.findOneAndUpdate(query, option, (errorFindHero, hero) => {
      if (errorFindHero) {
        res.send(errorFindHero);
      } else {
        res.json(hero);
      }
    });
  }

  function deleteMethod(req, res) {
    const heroNumId = +req.params.heroId;
    const query = { id: heroNumId };
    Hero.findOneAndRemove(query, (errorFindHero, hero) => {
      if (errorFindHero) {
        res.send(errorFindHero);
      } else {
        res.json(hero);
      }
    });
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = heroController;
