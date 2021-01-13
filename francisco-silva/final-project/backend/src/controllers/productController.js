function productController(Product) {
  function getMethod(req, res) {
    const { productId } = req.params;

    Product.findById(productId, (errorFindProduct, product) => (
      product ? res.json(product) : res.send(errorFindProduct)
    ));
  }

  function deleteMethod(req, res) {
    const { productId } = req.params;

    Product.findByIdAndRemove(productId, (errorDelete, product) => (
      errorDelete ? res.send(errorDelete) : res.send(product)
    ));
  }

  function postMethod(req, res) {
    const { productId } = req.params;
    Product.findByIdAndUpdate(productId, (errorUpdate, product) => (
      errorUpdate ? res.send(errorUpdate) : res.send(product)
    ));
  }

  return {
    getMethod, deleteMethod, postMethod,
  };
}

module.exports = productController;
