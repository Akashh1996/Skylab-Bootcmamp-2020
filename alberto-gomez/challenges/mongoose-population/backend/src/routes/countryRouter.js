const express = require('express');

const router = express.Router();

function CountryRouter(Country) {
  router.get('/', (req, res) => {
    const query = {};
    CountryRouter.find(query, (error, countries) => (
      error
        ? res.send(error)
        : res.json(countries)
    ));
  });

  router.put('/', (req, res) => {
    const country = new Country(req.body);
    country.save((error, countrySaved) => (
      error
        ? res.send(error)
        : res.json(countrySaved)
    ));
  });

  return router;
}

module.exports = CountryRouter;
