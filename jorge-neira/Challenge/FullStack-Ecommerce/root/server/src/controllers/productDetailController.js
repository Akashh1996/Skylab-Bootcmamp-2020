function productDetailController(Laptop) {
  function getMethod({ params }, res) {
    const model = { _id: params.productName };
    console.log(Laptop);
    Laptop.findOne(model)
      .populate('generalSpecs')
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
