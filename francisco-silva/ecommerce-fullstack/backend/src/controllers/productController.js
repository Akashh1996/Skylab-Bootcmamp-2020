function productController(Product) {
  function getMethod(req, res) {
    const query = {
      id: req.product,
    };
    Product.find(query, (errorFindProducts, product) => {
      if (errorFindProducts) {
        return res.send(errorFindProducts);
      }
      return res.json(product);
    });
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

    Product.deleteOne({ id }, (errorDelete, product) => {
      if (errorDelete) {
        return res.send(errorDelete);
      }
      return res.send(product);
    });
  }

  function allMiddleware(req, res, next) {
    req.product = +req.params.productId;

    next();
  }

  return {
    getMethod, postMethod, deleteMethod, allMiddleware,
  };
}

module.exports = productController;
