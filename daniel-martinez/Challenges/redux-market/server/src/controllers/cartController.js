function cartController(Product) {
  function getMethod(req, res) {
    res.json(Product.getCart());
  }

  function putMethod(req, res) {
    Product.addToCart(req.body);

    res.json(Product.getCart());
  }

  function deleteMethod(req, res) {
    Product.deleteFromCart(req.body);

    res.json(Product.getCart());
  }

  return { getMethod, putMethod, deleteMethod };
}

module.exports = cartController;
