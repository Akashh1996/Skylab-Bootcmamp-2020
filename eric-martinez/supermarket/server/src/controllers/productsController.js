function productsController(Product) {
  function getMethod(req, res) {
    const query = {};
    Product.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json(products);
    });
  }
  return {
    getMethod,
  };
}

module.exports = productsController;
