function productsListController(Products) {
  function getMethod(req, res) {
    res.json(Products.getCurrentCart());
  }

  function postMethod(req, res) {
    const updateCart = {
      ...req.body,
    };
    Products.addProductToCart(updateCart);
    res.json(Products.getCurrentCart());
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = productsListController;
