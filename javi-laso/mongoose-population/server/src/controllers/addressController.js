function addressController(addressSchema) {
  function getAddressesMethod(req, res) {
    const query = {};
    const getCallback = (error, addresses) => (error ? res.send(error) : res.send(addresses));
    addressSchema.find(query)
      .populate('country')
      .exec(getCallback);
  }

  function postAddressesMethod(req, res) {
    const addressToCreate = req.body;
    const postCallback = (error, created) => (error ? res.send(error) : res.send(created));
    addressSchema.create(addressToCreate, postCallback);
  }

  return {
    getAddressesMethod,
    postAddressesMethod,
  };
}

module.exports = addressController;
