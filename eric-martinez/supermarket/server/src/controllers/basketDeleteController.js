function basketDeleteController(Product) {
  function deleteMethod(req, res) {
    const productId = (+req.params.productId);
    // eslint-disable-next-line no-console
    console.log(req.body);
    Product.deleteProduct(productId);

    res.json(Product.getBasket());
  }
  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.productId);
    next();
  }
  return {
    deleteMethod, allMiddleware,
  };
}

module.exports = basketDeleteController;
