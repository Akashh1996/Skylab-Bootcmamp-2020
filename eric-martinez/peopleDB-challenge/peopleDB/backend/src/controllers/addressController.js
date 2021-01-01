function addressController(Address) {
  function getMethod(req, res) {
    const query = {};
    Address.find(query, (errorFindAddress, address) => {
      if (errorFindAddress) {
        return res.send(errorFindAddress);
      }
      return res.json(address);
    });
  }
  function putMethod(req, res) {
    const query = req.body;
    Address.create(query, (errorPutAddress, address) => {
      if (errorPutAddress) {
        return res.send(errorPutAddress);
      }
      return res.json(address);
    });
  }
  return { getMethod, putMethod };
}

module.exports = addressController;
