function productsController(Product) {
  function getMethod(req, res) {
    const query = {};
    Product.find(query, (errorFindProducts, products) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }else
      res.json(products);
    });
  }

  /* function putMethod(req, res) {
    Product.addProduct(req.body);

    res.json(Product.getProducts());
  } */

  return {
    getMethod,
  };
}

module.exports = productsController;
