function heroController(superHeroSchema, cartSchema) {
  function getMethod(req, res) {
    const query = {};
    const sendHeroesList = (error, heroesList) => {
      if (error) {
        res.send(error);
      } else {
        res.send(heroesList);
      }
    };
    superHeroSchema.find(query)
      .populate('car')
      .exec(sendHeroesList);
  }

  function getCarsMethod(req, res) {
    const query = {};
    cartSchema.find(query, (error, carsList) => {
      if (error) {
        res.send(error);
      } else {
        res.send(carsList);
      }
    });
  }
  return { getMethod, getCarsMethod };
}

module.exports = heroController;
