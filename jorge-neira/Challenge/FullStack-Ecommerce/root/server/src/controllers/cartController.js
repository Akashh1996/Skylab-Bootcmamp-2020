/* eslint-disable no-console */
function cartController(Carts) {
  function getMethod(req, res) {
    const query = {};
    Carts.find(query, (errorFindProduct, productDoc) => (
      errorFindProduct
        ? res.send(errorFindProduct) : res.json(productDoc)
    ));
  }

  function postMethod(req, res) {
    const updateCart = {
      ...req.body,
    };
    Carts.create(updateCart, (errCreateUpdate) => (errCreateUpdate
      ? res.send(errCreateUpdate)
      : res.json(updateCart)));
  }

  function deleteMethod(req, res) {
    const updateCart = {
      ...req.body,
    };
    console.log(updateCart);
    Carts.deleteOne(updateCart, (errorDelete) => (
      errorDelete
        ? res.send(errorDelete) : res.json(updateCart)));
  }

  return {
    getMethod, postMethod, deleteMethod,
  };
}

module.exports = cartController;
