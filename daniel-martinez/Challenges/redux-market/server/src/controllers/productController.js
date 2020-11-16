function productController(Product) {
  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.productId);
    next();
  }

  function getMethod(req, res) {
    res.json(req.product);
  }

  return { allMiddleware, getMethod };
}

module.exports = productController;
