/* eslint-disable no-underscore-dangle */
function productController(Product, Cart) {
  function getMethod({ body }, res) {
    Product.findOne(body._id, (errorFindProduct, product) => (errorFindProduct
      ? res.send(errorFindProduct)
      : res.json(product)));
  }

  function postMethod({ body }, res) {
    Cart.findOneAndUpdate(body, { $inc: { quantity: 1 } }, { upsert: true, new: true },
      (errorAddProduct, newProduct) => (errorAddProduct
        ? res.send(errorAddProduct)
        : res.json(newProduct)));
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = productController;
