function cartController(Product, Cart) {
  function getMethod(req, res) {
    const query = {};
    Cart.find(query, (errorFindCart, cart) => {
      if (errorFindCart) {
        res.send(errorFindCart);
      } else {
        res.json(cart);
      }
    });
  }

  async function deleteMethod(req, res) {
    await Cart.findByIdAndRemove(req.params.productId, (errorAddProduct) => {
      if (errorAddProduct) {
        res.send(errorAddProduct);
      } else {
        res.json('Eliminado');
      }
    });
  }
  return {
    getMethod, deleteMethod,
  };
}

module.exports = cartController;
