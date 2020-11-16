function basketProductController(Product) {
  function postMethod(req) {
    const id = +req.params.productId;
    Product.addProductToBasket(id);
  }
  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.productId);
    next();
  }
  return { postMethod, allMiddleware };
}

module.exports = basketProductController;
