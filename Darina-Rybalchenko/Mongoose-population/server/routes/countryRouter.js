const { Router } = require('express');

function countryRouter(Country) {
  const router = Router();
  router.get('/', (req, res) => {
    const query = {};
    Country.find(query, (errorCreate, countries) => {
      if (errorCreate) {
        res.send(errorCreate);
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

module.exports = countryRouter;
