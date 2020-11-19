function countryController(Country) {
  function getCountryMethod(req, res) {
    const query = {};
    Country.find(query, (errorFind, user) => (
      errorFind
        ? res.send(errorFind)
        : res.json(user)));
  }

  function putCountryMethod(req, res) {
    const {
      code, name,
    } = req.body;
    Country.create({ code, name }, (errorCreating, address) => (
      errorCreating
        ? res.send(errorCreating)
        : res.json(address)));
  }

  return { getCountryMethod, putCountryMethod };
}

module.exports = countryController;
