function cartController(Cart) {
  function getMethod(req, res) {
    const query = {};
    Cart.find(query, (errorFindProducts, cartProducts) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json(cartProducts);
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    console.log(req);
    Cart.create(query, (errorFindProducts, cartProduct) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json(cartProduct);
    });
  }

  function deleteMethod(req, res) {
    const query = req.body;
    Cart.findOneAndRemove(query, (errorFindProducts, cartProducts) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json(cartProducts);
    });
  }

  return { getMethod, putMethod, deleteMethod };
}

module.exports = cartController;
