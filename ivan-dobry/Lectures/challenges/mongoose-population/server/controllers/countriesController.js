/* eslint-disable no-console */

function adressController(country) {
  function putMethod({ body }, res) {
    country.create(body, (errorAddingCountries) => (
      errorAddingCountries
        ? res.send(errorAddingCountries)
        : res.send('added country ...')));
  }

  return {
    putMethod,
  };
}

module.exports = adressController;
