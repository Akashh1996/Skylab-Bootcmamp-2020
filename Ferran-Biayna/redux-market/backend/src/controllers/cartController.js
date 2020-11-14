function cartController(Product) {
  function getMethod(req, res) {
    res.json(Product.getCart());
  }

  function deleteMethod(req, res) {
    Product.deleteProduct(+req.params.productId);
    res.json(Product.getCart());
  }

  return {
    getMethod, deleteMethod,
  };
}

module.exports = cartController;
