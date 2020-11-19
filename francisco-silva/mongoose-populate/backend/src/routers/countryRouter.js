const { Router } = require('express');

function countryRouter(Country) {
  const router = Router();
  router.get('/', (req, res) => {
    const query = {};
    Country.find(query, (errorFindCountry, country) => {
      if (errorFindCountry) {
        res.send(errorFindCountry);
      }
      res.json(country);
    });
  });
  router.put('/', (req, res) => {
    const query = req.body;
    Country.create(query, (errorPutCountry, country) => {
      if (errorPutCountry) {
        res.send(errorPutCountry);
      }
      res.json(country);
    });
  });

  router.delete('/:id', (req, res) => {
    const query = req.params.id;
    Country.findByIdAndRemove(query, (errorDelete) => (
      errorDelete ? res.send(errorDelete) : res.send('deleted')
    ));
  });

  router.post('/:id', (req, res) => {
    const query = req.params.id;
    Country.findByIdAndUpdate(query, (errorUpdate, address) => (
      errorUpdate ? res.send(errorUpdate) : res.send(address)
    ));
  });
  return router;
}
module.exports = countryRouter;
