function productController(Product) {
  function getMethod(req, res) {
    res.json(req.product);
  }
  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.productId);
    next();
  }
  return {
    getMethod, allMiddleware,
  };
}

module.exports = productController;
