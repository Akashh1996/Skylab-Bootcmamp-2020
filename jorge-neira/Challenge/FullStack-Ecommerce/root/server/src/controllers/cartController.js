function cartController(Carts) {
  function getMethod(req, res) {
    const query = {};
    Carts.find(query, (errorFindProduct, productDoc) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      }
      res.json(productDoc);
    });
  }

  function postMethod(req, res) {
    const updateCart = {
      ...req.body,
    };
    Carts.create(updateCart, (errCreateUpdate) => {
      if (errCreateUpdate) {
        res.send(errCreateUpdate);
      }
    });
  }

  function deleteMethod(req, res) {
    const updateCart = {
      ...req.body,
    };
    Carts.findOneAndDelete(updateCart.cartId, (deleted) => {
      res.send(deleted);
    });
  }

  return {
    getMethod, postMethod, deleteMethod,
  };
}

module.exports = cartController;
