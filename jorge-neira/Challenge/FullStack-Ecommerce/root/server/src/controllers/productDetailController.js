function productDetailController(Products) {
  function allMiddleware(req, res, next) {
    console.log(req);
    req.detail = Products.getProductById(req.params.productName);
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
