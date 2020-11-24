const { Router } = require("express");
const router = new Router();
const _ = require("underscore"); //biblioteca de procesamiento de datos

const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const id = movies.length + 1;
  const { title, year, income } = req.body;
  const newMovie = { ...req.body, id };
  if (id && title && year && income) {
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, year, income } = req.body;
  if (id && title && year && income) {
    _.each(movies, (movie, i) => {
      if (movie.id === id) {
        movie.title = title;
        movie.year = year;
        movie.income = income;
      }
    });
    res.json(movies);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    _.each(movies, (movie, i) => {
      if (movie.id == id) {
        movies.splice(i, 1);
      }
    });
    res.json(movies);
  }
});

module.exports = router;
