function productsController(Product) {
  function getMethod(req, res) {
    const query = {};
    Product.find(query, (errorFindProducts, products) => (errorFindProducts
      ? res.send(errorFindProducts)
      : res.json(products)));
  }
  return {
    getMethod,
  };
}

module.exports = productsController;
