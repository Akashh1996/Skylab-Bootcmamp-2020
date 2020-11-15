function productDetailController(Products) {
  function allMiddleware(req, res, next) {
    console.log(req.query);
    req.detail = Products.getProductByProductName(req.query['product-model']);
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
