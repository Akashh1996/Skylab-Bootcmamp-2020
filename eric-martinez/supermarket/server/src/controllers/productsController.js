function productsController(Product) {
  function getMethod(req, res) {
    res.json(Product.getProducts());
  }
  return {
    getMethod,
  };
}

module.exports = productsController;
