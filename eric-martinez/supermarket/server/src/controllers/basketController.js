function basketController(Product) {
  function getMethod(req, res) {
    res.json(Product.getBasket());
  }
  function putMethod(req, res) {
    console.log(req.body);
    Product.addProduct(req.body);

    res.json(Product.getBasket());
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = basketController;
