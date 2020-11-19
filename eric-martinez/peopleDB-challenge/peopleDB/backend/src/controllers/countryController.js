function countryController(Country) {
  function getMethod(req, res) {
    const query = {};
    Country.find(query, (errorFindCountry, country) => {
      if (errorFindCountry) {
        return res.send(errorFindCountry);
      }
      return res.json(country);
    });
  }
  function putMethod(req, res) {
    const query = req.body;
    Country.create(query, (errorPutCountry, country) => {
      if (errorPutCountry) {
        return res.send(errorPutCountry);
      }
      return res.json(country);
    });
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = countryController;
