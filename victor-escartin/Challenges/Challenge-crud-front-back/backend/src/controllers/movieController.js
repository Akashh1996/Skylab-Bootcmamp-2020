function movieController(Movie) {
  function allMiddleware(req, res, next) {
    const query = { id: +req.params.movieId };
    function findCallback(errorFindMovies, movie) {
      if (errorFindMovies) {
        return res.send(errorFindMovies);
      }
      req.movie = movie;
      return next();
    }
    Movie.findOne(query, findCallback);
  }

  function getMethod(req, res) {
    res.json(req.movie);
  }

  function postMethod(req, res) {
    const updatedMovie = {
      ...req.movie,
      ...req.body,
    };

    Movie.setMovie(updatedMovie);

    res.json(updatedMovie);
  }

  function deleteMethod(req, res) {
    const id = +req.params.movieId;

    Movie.deleteMovie(id);

    res.json(Movie.getMovies());
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = movieController;
