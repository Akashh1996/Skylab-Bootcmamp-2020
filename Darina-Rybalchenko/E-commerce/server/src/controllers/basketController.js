function basketController(Product) {
  function getMethod(req, res) {
    res.json(Product.getBasket());
  }
  return { getMethod };
}

module.exports = basketController;
