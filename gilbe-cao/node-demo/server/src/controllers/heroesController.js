function heroesController(Hero) {
  function getMethod({ query: { name } }, res) {
    const query = name ? {
      name: new RegExp(`${name}`, 'i'),
    } : {};
    Hero.find(query, (errorFindHeroes, heroes) => ((errorFindHeroes)
      ? res.send(errorFindHeroes)
      : res.json(heroes)));
  }

  function putMethod({ body: { id, name } }, res) {
    const query = { id };
    const option = { new: true };
    Hero.findOneAndUpdate(query, { name }, option, (errorFindHero, foundHero) => {
      if (errorFindHero) {
        res.send(errorFindHero);
      } else {
        res.json(foundHero);
      }
    });
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = heroesController;
