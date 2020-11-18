/* eslint-disable no-param-reassign */
function heroController(Hero) {
  function allMiddleware(req, res, next) {
    const query = { id: +req.params.heroId };
    function findCallback(errorFindHeroes, hero) {
      if (errorFindHeroes) {
        return res.send(errorFindHeroes);
      } req.hero = hero;
      req.modify = {
        name: 'Pepe',
        id: 120,
      };
      return next();
    }
    Hero.findOne(query, findCallback);
  }

  function getMethod({ hero }, res) {
    res.json(hero);
  }

  function postMethod(req, res) {
    Hero.findOne(req.hero, (errorFindingHero, hero) => {
      if (errorFindingHero) {
        return res.send(errorFindingHero);
      }
      const { name, id } = req.modify;
      hero.name = name;
      hero.id = id;
      hero.save();
      return res.send(hero);
    });
  }
  function deleteMethod(req, res) {
    Hero.findOne(req.hero, (errorFindHero, hero) => {
      if (errorFindHero) {
        return res.send(errorFindHero);
      }
      const id = req.delete;
      hero.id = id;
      hero.delete();
      return res.send(hero);
    });
  }

  return {
    getMethod, allMiddleware, postMethod, deleteMethod,
  };
}

module.exports = heroController;
