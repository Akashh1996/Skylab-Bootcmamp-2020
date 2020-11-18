function moviesController(Movie) {
  function getMethod(req, res) {
    const query = {};
    Movie.find(query, (errorFindMovies, movies) => {
      if (errorFindMovies) {
        res.send(errorFindMovies);
      }
      res.json(movies);
    });
  }

  function putMethod(req, res) {
    Movie.addMovie(req.body);

    res.json(Movie.getMovies());
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = moviesController;
