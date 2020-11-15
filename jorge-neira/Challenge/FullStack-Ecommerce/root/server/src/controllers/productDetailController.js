function productDetailController(Products) {
  function allMiddleware(req, res, next) {
    req.detail = Products.getProductByProductName(req.params.productName);
    next();
  }

  function getMethod(req, res) {
    res.json(req.detail);
  }

  return {
    getMethod, allMiddleware,
  };
}

module.exports = productDetailController;
