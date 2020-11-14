function productController(Product) {
  function getMethod(req, res) {
    res.json(req.product);
  }

  function postMethod(req) {
    Product.addProduct(+req.params.productId);
  }

  function deleteMethod(req) {
    Product.deleteProduct(+req.params.productId);
  }

  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.productId);
    next();
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = productController;
