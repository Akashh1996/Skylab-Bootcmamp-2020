function productController(Product) {
  function getMethod(req, res) {
    res.json(req.product);
  }
  function deleteMethod(req, res) {
    const id = +req.params.productId;
    Product.deleteProduct(id);
    res.json(Product.getProducts());
  }

  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.productId);
    next();
  }
  return { getMethod, deleteMethod, allMiddleware };
}

module.exports = productController;
