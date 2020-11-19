function addressesController(Address) {
  function getMethod(req, res) {
    const query = {};
    Address.find(query)
      .populate({
        path: 'country',
      })
      .exec((errorFindAddresses, addresses) => ((errorFindAddresses)
        ? res.send(errorFindAddresses)
        : res.json(addresses)
      ));
  }

  function putMethod(req, res) {
    const query = req.body;
    Address.create(query)
      .populate({ path: 'country' })
      .exec((errorFindAddresses, addresses) => ((errorFindAddresses)
        ? res.send(errorFindAddresses)
        : res.json(addresses)

      ));
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = addressesController;
