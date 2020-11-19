function countryController(Country) {
  function getMethod(req, res) {
    const query = {};
    Country.find(query, (errorFindCountry, country) => {
      if (errorFindCountry) {
        res.send(errorFindCountry);
      }
      res.json(country);
    });
  }
  function putMethod(req, res) {
    const query = req.body;
    Country.create(query, (errorPutCountry, country) => {
      if (errorPutCountry) {
        res.send(errorPutCountry);
      }
      res.json(country);
    });
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = countryController;
