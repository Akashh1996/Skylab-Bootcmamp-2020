function productsController(Product) {
  function getMethod(req, res) {
    const query = {};
    // eslint-disable-next-line max-len
    Product.find(query, (errorFindProducts, products) => (errorFindProducts ? res.send(errorFindProducts) : res.send(products)));
  }

  function putMethod(req, res) {
    Product.addProduct(req.body);

    res.json(Product.getProducts());
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = productsController;
