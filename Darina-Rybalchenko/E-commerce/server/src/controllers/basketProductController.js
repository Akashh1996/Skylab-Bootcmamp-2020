function basketProductController(Product) {
  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.productId);
    next();
  }
  function postMethod(req) {
    const id = +req.params.productId;
    Product.addProductToBasket(id);
  }

  function deleteMethod(req, res) {
    const id = +req.params.productId;
    Product.deleteProductFromBasket(id);
    res.json(Product.getBasket());
  }
  return { postMethod, allMiddleware, deleteMethod };
}

module.exports = basketProductController;
