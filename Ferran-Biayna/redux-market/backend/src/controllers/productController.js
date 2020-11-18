function productController(Product, Cart) {
  function getMethod(req, res) {
    Product.findOne({ id: +req.params.productId }, (errorFindProduct, product) => (errorFindProduct
      ? res.send(errorFindProduct)
      : res.json(product)));
  }

  function postMethod({ body }, res) {
    Cart.create(body, (errorAddProduct, newProduct) => (errorAddProduct
      ? res.send(errorAddProduct)
      : res.json(newProduct)));
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = productController;
