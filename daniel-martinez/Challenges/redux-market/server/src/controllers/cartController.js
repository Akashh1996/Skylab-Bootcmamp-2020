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
    Cart.create(query, (errorFindProducts, cartProduct) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json(cartProduct);
    });
  }

  function deleteMethod(req, res) {
    const query = req.body;
    Cart.findOneAndRemove(query, (errorFindProducts) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return Cart.find({}, (errorFinding, cartList) => {
        if (errorFinding) {
          return res.send(errorFindProducts);
        }
        return res.json(cartList);
      });
    });
  }

  return { getMethod, putMethod, deleteMethod };
}

module.exports = cartController;
