/* eslint-disable no-underscore-dangle */
function CountriesController(Countries) {
  function getMethod(req, res) {
    Countries.find({}, (errorFindCountries, countries) => (errorFindCountries
      ? res.send(errorFindCountries)
      : res.json(countries)));
  }

  function postMethod({ body }, res) {
    Countries.create(body, (errorAddCountry, newCountry) => (errorAddCountry
      ? res.send(errorAddCountry)
      : res.json(newCountry)));
  }

  function putMethod({ body }, res) {
    Countries.findByIdAndUpdate(body._id, (errorAddCountry, newCountry) => (errorAddCountry
      ? res.send(errorAddCountry)
      : res.json(newCountry)));
  }

  function deleteMethod({ body }, res) {
    Countries.findByIdAndRemove(body._id,
      (errorDeleteCountries, deletedCountries) => (errorDeleteCountries
        ? res.send(errorDeleteCountries)
        : res.json(deletedCountries)));
  }

  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = CountriesController;
