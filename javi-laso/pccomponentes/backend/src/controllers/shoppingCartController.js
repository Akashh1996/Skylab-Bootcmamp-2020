function shoppingCarController(cartItemSchema) {
  function getMethod(req, res) {
    const query = { };
    const getCallBack = (error, cartList) => (error ? res.send(error) : res.send(cartList));
    cartItemSchema.find(query)
      .populate('product')
      .exec(getCallBack);
  }

  function patchMethod(req, res) {
    const { item } = req.body;
    const query = { product: item._id };
    const update = { $inc: { quantity: 1 } };
    const patchCallback = (error, newItem) => (error ? res.send(error) : res.send(newItem));
    cartItemSchema.findOneAndUpdate(query, update, { upsert: true, new: true })
      .populate('product')
      .exec(patchCallback);
  }

  function deleteMethod(req, res) {
    const item = req.body;
    const query = { product: item._id };
    const update = { $inc: { quantity: -1 } };
    const deleteCallback = (error, deletedItem) => (
      error
        ? res.send(error)
        : res.send(deletedItem)
    );
    cartItemSchema.findOneAndUpdate(query, update, { new: true })
      .populate('product')
      .exec(deleteCallback);
  }

  return { getMethod, patchMethod, deleteMethod };
}

module.exports = shoppingCarController;
