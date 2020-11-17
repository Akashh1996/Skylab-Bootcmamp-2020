function productDetailController(Products) {
  function getMethod({ params }, res) {
    Products.findOne({ 'product-model': params.productName }, (errorFindProduct, products) => (
      errorFindProduct
        ? res.send(errorFindProduct)
        : res.json(products)));
  }

  return {
    getMethod,
  };
}

module.exports = productDetailController;
