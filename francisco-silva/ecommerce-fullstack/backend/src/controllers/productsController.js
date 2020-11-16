function productsController(Product) {
  function getMethod(req, res) {
    console.log('ENTRO EN EL GET DE /');
    res.json(Product.getProducts());
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
