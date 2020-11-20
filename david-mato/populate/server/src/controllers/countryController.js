function countryController(Country) {
  function getMethod(req, res) {
    const query = {};
    function findCallback(error, countries) {
      return error ? res.send(error) : res.json(countries);
    }

    Country.find(query, findCallback);
  }

  function postMethod(req, res) {
    const query = req.body;
    function findCallback(error, countrySaved) {
      return error ? res.send(error) : res.json(countrySaved);
    }

    Country.create(query, findCallback);
  }

  return {
    getMethod,
    postMethod,
  };
}

module.exports = countryController;
