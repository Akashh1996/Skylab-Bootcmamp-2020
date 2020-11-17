function cartController(Cart) {
  function getMethod(req, res) {
    Cart.find({}, (errorFindCart, cart) => (errorFindCart
      ? res.send(errorFindCart)
      : res.json(cart)));
  }

  function deleteMethod(req, res) {
    Cart.findByIdAndRemove(req.params.productId, (errorDeleteProduct) => (errorDeleteProduct
      ? res.send(errorDeleteProduct)
      : res.json(null)));
  }
  return {
    getMethod, deleteMethod,
  };
}

module.exports = cartController;
