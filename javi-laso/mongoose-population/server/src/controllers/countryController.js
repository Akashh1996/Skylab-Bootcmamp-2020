function countryController(countrySchema) {
  function getCountriesMethod(req, res) {
    const query = {};
    const getCallback = (error, countries) => (error ? res.send(error) : res.send(countries));
    countrySchema.find(query)
      .populate('address')
      .exec(getCallback);
  }

  function postCountriesMethod(req, res) {
    const countryToCreate = req.body;
    const postCallback = (error, created) => (error ? res.send(error) : res.send(created));
    countrySchema.create(countryToCreate, postCallback);
  }

  return {
    getCountriesMethod,
    postCountriesMethod,
  };
}

module.exports = countryController;
