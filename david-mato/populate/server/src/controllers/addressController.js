function AddressController(Address) {
  function getMethod(req, res) {
    const query = {};
    function findCallback(error, addresses) {
      return error ? res.send(error) : res.json(addresses);
    }

    Address.find(query, findCallback);
  }

  function postMethod(req, res) {
    const query = req.body;
    function findCallback(error, userSaved) {
      return error ? res.send(error) : res.json(userSaved);
    }

    Address.create(query, findCallback);
  }

  return {
    getMethod,
    postMethod,
  };
}

module.exports = AddressController;
