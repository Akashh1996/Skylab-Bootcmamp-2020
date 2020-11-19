function countryController(Country) {
  function getMethod(req, res) {
    const query = {};
    Country.find(query, (errorCreate, countries) => {
      if (errorCreate) {
        res.send(errorCreate);
      }
      res.json(countries);
    });
  }

  function putMethod(req, res) {
    const country = new Country(req.body);
    country.save((error, countrySaved) => (error ? res.send(error) : res.json(countrySaved)));
  }

  return { getMethod, putMethod };
}

module.exports = countryController;
