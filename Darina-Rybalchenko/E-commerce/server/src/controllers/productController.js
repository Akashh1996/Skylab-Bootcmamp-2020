function productController(Products) {
  function getMethod(req, res) {
    const query = { id: req.product };
    Products.find(query, (errorFindProducts, product) => {
      if (errorFindProducts) {
        res.send(errorFindProducts);
      }
      res.json(product);
      console.log('product', product);
    });
  }

  function allMiddleware(req, res, next) {
    req.product = +req.params.productId;
    console.log('req.product', req.product);
    next();
  }
  return { getMethod, allMiddleware };
}

module.exports = productController;
