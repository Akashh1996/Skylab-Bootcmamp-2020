/* eslint-disable no-underscore-dangle */
function cartController(Cart) {
  function getMethod(req, res) {
    Cart.find({})
      .populate('cartProduct')
      .exec((errorFindCart, cart) => (errorFindCart
        ? res.send(errorFindCart)
        : res.json(cart)));
  }

  function deleteMethod({ body }, res) {
    Cart.findOneAndUpdate(body, { $inc: { quantity: -1 } }, { upsert: true, new: true },
      (errorUpdatedProduct, UpdatedProduct) => (errorUpdatedProduct
        ? res.send(errorUpdatedProduct)
        : res.json(UpdatedProduct)));
  }

  return {
    getMethod, deleteMethod,
  };
}

module.exports = cartController;
