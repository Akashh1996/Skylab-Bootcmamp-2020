const express = require('express');
const movieController = require('../controllers/movieController');
const moviesController = require('../controllers/moviesController');

function movieRouter(Movie) {
  const router = express.Router();
  const movie = movieController(Movie);
  const movies = moviesController(Movie);

  router.route('/')
    .get(movies.getMethod)
    .put(movies.putMethod);

  router.route('/:movieId')
    .all(movie.allMiddleware)
    .get(movie.getMethod)
    .post(movie.postMethod)
    .delete(movie.deleteMethod);

  return router;
}

module.exports = movieRouter;
