function cartController(Cart) {
  function getMethod(req, res) {
    const query = {};
    Cart.find(query, (errorFindProducts, cartProducts) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(cartProducts);
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    Cart.create(query, (errorFindProducts, cartProduct) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(cartProduct);
    });
  }

  function deleteMethod(req, res) {
    const query = req.body;
    Cart.findOneAndRemove(query, (errorFindProducts, cartProducts) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      Cart.find({}, (errorFinding, cartList) => {
        if (errorFinding) {
          res.send(errorFindProducts);
        }
        res.json(cartList);
      });
    });
  }

  return { getMethod, putMethod, deleteMethod };
}

module.exports = cartController;
