function productsController(Product) {
  function getMethod(req, res) {
    console.log(req);
    console.log(Product.getProducts())
    res.json(Product.getProducts());
  }
  return {
    getMethod,
  };
}

module.exports = productsController;
