function productsController(Product) {
  function getMethod(req, res) {
    Product.find({}, (errorFindProducts, products) => (errorFindProducts
      ? res.send(errorFindProducts)
      : res.json(products)));
  }
  return {
    getMethod,
  };
}

module.exports = productsController;
