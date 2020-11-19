function countriesController(Country) {
  function getMethod(req, res) {
    const query = {};
    Country.find(query, (errorFindCountries, countries) => ((errorFindCountries)
      ? res.send(errorFindCountries)
      : res.json(countries)
    ));
  }

  function putMethod(req, res) {
    const query = req.body;
    Country.create(query, (errorFindCountries, countries) => ((errorFindCountries)
      ? res.send(errorFindCountries)
      : res.json(countries)
    ));
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = countriesController;
