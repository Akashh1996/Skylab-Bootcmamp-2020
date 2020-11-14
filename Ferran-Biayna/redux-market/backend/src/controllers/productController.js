function productController(Product) {
  function getMethod(req, res) {
    res.json(req.product);
  }

  function postMethod(req, res) {
    Product.addProduct(+req.params.productId);
    console.log(Product.getCart());
    res.json(Product.getCart());
  }

  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.productId);
    next();
  }

  return {
    getMethod, postMethod, allMiddleware,
  };
}

module.exports = productController;
