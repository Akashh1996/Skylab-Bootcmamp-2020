function addressControler(Address) {
  function getMethod(req, res) {
    const query = {};
    Address.find(query, (errorCreate, addresses) => {
      if (errorCreate) {
        res.send(errorCreate);
      }
      res.json(addresses);
    });
  }
  function putMethod(req, res) {
    const address = new Address(req.body);
    address.save((error, addressSaved) => (error ? res.send(error) : res.json(addressSaved)));
  }

  return { getMethod, putMethod };
}

module.exports = addressControler;
