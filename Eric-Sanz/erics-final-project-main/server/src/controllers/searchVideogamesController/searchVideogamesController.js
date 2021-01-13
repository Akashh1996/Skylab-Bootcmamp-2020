function searchVideogamesController(Videogame) {
  function getMethod(req, res) {
    const { name } = req.query;
    Videogame.find(name, (errorSearchingVideogame, videogame) => (
      errorSearchingVideogame ? res.send(errorSearchingVideogame)
        : res.json(videogame)));
  }
  return {
    getMethod,
  };
}

module.exports = searchVideogamesController;
