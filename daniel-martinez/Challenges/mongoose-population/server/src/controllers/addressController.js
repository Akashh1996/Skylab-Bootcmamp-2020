function addressController(Address) {
  function getMethod(req, res) {
    const query = {};
    Address.find(query, (errorFindAddress, addresses) => (
      errorFindAddress
        ? res.send(errorFindAddress)
        : res.json(addresses)));
  }

  function putMethod(req, res) {
    const address = new Address(req.body);
    address.save((error, addressSaved) => (error ? res.send(error) : res.json(addressSaved)));
  }

  return { getMethod, putMethod };
}

module.exports = addressController;
