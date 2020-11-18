function productController(Product) {
  function getMethod(req, res) {
    const query = { id: req.product };
    Product.findOne(query, (errorFindProducts, product) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(product);
    });
  }
  function allMiddleware(req, res, next) {
    req.product = +req.params.productId;
    next();
  }
  return {
    getMethod, allMiddleware,
  };
}

module.exports = productController;
