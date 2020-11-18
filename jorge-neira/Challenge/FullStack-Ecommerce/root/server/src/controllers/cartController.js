function cartController(Carts) {
  function getMethod(req, res) {
    const query = {};
    Carts.find(query, (errorOnFind, productDoc) => (
      errorOnFind
        ? res.send(errorOnFind)
        : res.json(productDoc)
    ));
  }

  function postMethod(req, res) {
    const newItem = {
      ...req.body,
    };
    Carts.create(newItem, (errorOnCreate) => (
      errorOnCreate
        ? res.send(errorOnCreate)
        : res.json(newItem)));
  }

  function deleteMethod(req, res) {
    const { _id } = req.body;
    Carts.deleteOne(_id, (errorOnDelete) => (
      errorOnDelete
        ? res.send(errorOnDelete)
        : res.json(_id)));
  }

  return {
    getMethod, postMethod, deleteMethod,
  };
}

module.exports = cartController;
