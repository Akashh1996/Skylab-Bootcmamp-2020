function addressController(Address) {
  function getAddressMethod(req, res) {
    const query = {};
    Address.find(query, (errorFind, address) => (
      errorFind
        ? res.send(errorFind)
        : res.json(address)));
  }

  function putAddressMethod(req, res) {
    const {
      street, number, city, country,
    } = req.body;
    Address.create({
      street, number, city, country,
    }, (errorCreating, address) => (
      errorCreating
        ? res.send(errorCreating)
        : res.json(address)));
  }

  return { getAddressMethod, putAddressMethod };
}

module.exports = addressController;
