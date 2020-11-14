function cartController(Product) {
  function getMethod(req, res) {
    res.json(Product.getCart());
  }

  return {
    getMethod,
  };
}

module.exports = cartController;
