function videogamesController(Videogame) {
  function getMethod(req, res) {
    const query = {};
    Videogame.find(query, (errorGetVideogames, videogames) => ((errorGetVideogames)
      ? res.send(errorGetVideogames) : res.json(videogames)));
  }

  function putMethod({ body }, res) {
    Videogame.create(body, (errorCreateVideogame, newVideogame) => ((errorCreateVideogame)
      ? res.send(errorCreateVideogame) : res.json(newVideogame)));
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = videogamesController;
