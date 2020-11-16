function productDetailController(Products) {
  function getMethod(req, res) {
    Products.findOne({ 'product-model': req.params.productName }, (errorFindProduct, products) => {
      if (errorFindProduct) {
        res.send(errorFindProduct);
      }
      res.json(products);
    });
  }

  return {
    getMethod,
  };
}

module.exports = productDetailController;
