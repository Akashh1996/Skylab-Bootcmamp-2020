function productController(Product) {
  function getMethod(req, res) {
    res.json(req.product);
  }

  function postMethod(req, res) {
    const updatedProduct = {
      ...req.product,
      ...req.body,
    };

    Product.setProduct(updatedProduct);

    res.json(updatedProduct);
  }

  function deleteMethod(req, res) {
    const id = +req.params.productId;

    Product.deleteProduct(id);

    res.json(Product.getProducts());
  }

  function allMiddleware(req, res, next) {
    req.product = Product.getProductById(+req.params.heroId);
    next();
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = productController;
