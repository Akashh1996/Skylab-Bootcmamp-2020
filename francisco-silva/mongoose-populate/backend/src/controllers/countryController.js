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

  function deleteMethod(req, res) {
    const query = req.params.id;
    Country.findByIdAndRemove(query, (errorDelete) => (
      errorDelete ? res.send(errorDelete) : res.send('deleted')
    ));
  }

  function postMethod(req, res) {
    const query = req.params.id;
    Country.findByIdAndUpdate(query, (errorUpdate, address) => (
      errorUpdate ? res.send(errorUpdate) : res.send(address)
    ));
  }
  return {
    getMethod, putMethod, deleteMethod, postMethod,
  };
}

module.exports = countryController;
