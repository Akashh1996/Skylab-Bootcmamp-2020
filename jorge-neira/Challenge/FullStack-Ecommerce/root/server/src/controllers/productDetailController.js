function productDetailController(Products) {
  function getMethod({ params }, res) {
    const model = { 'product-model': params.productName };
    Products.findOne(model, (errorFindProduct, products) => (
      errorFindProduct
        ? res.send(errorFindProduct)
        : res.json(products)));
  }

  return {
    getMethod,
  };
}

module.exports = productDetailController;
