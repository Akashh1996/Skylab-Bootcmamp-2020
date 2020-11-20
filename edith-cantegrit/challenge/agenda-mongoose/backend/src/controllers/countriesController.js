function countriesController(Countries) {
  function getMethod(req, res) {
    const query = {};
    Countries.find(query, (errorFindCountries, findCountries) => {
      if (errorFindCountries) {
        return res.send(errorFindCountries);
      }
      return res.json(findCountries);
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    Countries.create(query, (errorFindCountries, findCountries) => {
      if (errorFindCountries) {
        return res.send(errorFindCountries);
      }
      return res.json(findCountries);
    });
  }

  return { getMethod, putMethod };
}

module.exports = countriesController;
