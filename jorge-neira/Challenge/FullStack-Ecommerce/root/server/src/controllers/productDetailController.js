function productDetailController(Laptop) {
  function getMethod({ params }, res) {
    const model = { 'product-model': params.productName };
    Laptop.findOne(model)
      .populate('product-general-specs')
      .exec(
        ((errorFindProduct, products) => (
          errorFindProduct
            ? res.send(errorFindProduct)
            : res.json(products))),
      );
  }
  return {
    getMethod,
  };
}

module.exports = productDetailController;
