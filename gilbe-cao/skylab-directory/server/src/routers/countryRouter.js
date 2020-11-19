const { Router } = require('express');

function CountryRouter(Country) {
  const router = Router();

  router.get('/', (req, res) => {
    const query = {};
    Country.find(query, (errorFindCountry, countries) => {
      if (errorFindCountry) {
        res.send(errorFindCountry);
      }

      res.json(countries);
    });
  });

  router.put('/', (req, res) => {
    const country = new Country(req.body);
    country.save((error, countrySaved) => (error ? res.send(error) : res.json(countrySaved)));
  });

  return router;
}

module.exports = CountryRouter;
