function addressController(Address) {
  function getMethod(req, res) {
    const query = {};
    Address.find(query, (error, addresses) => (
      error
        ? res.send(error)
        : res.json(addresses)
    ));
  }

  function putMethod(req, res) {
    const address = new Address(req.body);
    address.save((error, addressSaved) => (
      error
        ? res.send(error)
        : res.json(addressSaved)
    ));
  }
  return { getMethod, putMethod };
}

module.exports = addressController;
