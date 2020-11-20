/* eslint-disable no-console */

function adressController(adress) {
  function putMethod({ body }, res) {
    adress.create(body, (errorAddingAdress) => (
      errorAddingAdress
        ? res.send(errorAddingAdress)
        : res.send('added adress...')));
  }

  return {
    putMethod,
  };
}

module.exports = adressController;
