function productsController(Product) {
  function getMethod(req, res) {
    const query = {};
    Product.find(query, (errorFindProducts, products) => (
      errorFindProducts ? res.send(errorFindProducts) : res.send(products)
    ));
  }

  function putMethod(req, res) {
    const query = {};
    Product.create(query, (errorCreateProduct, product) => (
      errorCreateProduct ? res.send(errorCreateProduct) : res.json(product)
    ));
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = productsController;
