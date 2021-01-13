function videogameController(Videogame) {
  function getMethod(req, res) {
    const { id } = req.params;
    Videogame.findById(id, (errorGetVideogame, videogame) => ((errorGetVideogame)
      ? res.send(errorGetVideogame) : res.json(videogame)));
  }

  return {
    getMethod,
  };
}

module.exports = videogameController;
