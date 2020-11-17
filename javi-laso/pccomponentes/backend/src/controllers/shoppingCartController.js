function shoppingCarController(cartItemSchema) {
  function getMethod(req, res) {
    cartItemSchema.find({}, (error, cart) => {
      if (error) {
        res.send(error);
      } else {
        res.send(cart);
      }
    });
  }

  function putMethod(req, res) {
    let { item } = req.body;
    item = { ...item, _id: null };
    cartItemSchema.create(item, (error, newItem) => {
      if (error) {
        res.send(error);
      } else {
        res.send(newItem);
      }
    });
  }

  function deleteMethod(req, res) {
    const item = req.body;
    cartItemSchema.deleteOne({ id: item.id }, (error, deletedItem) => {
      if (error) {
        res.send(error);
      }
      res.send(deletedItem);
    });
  }

  return { getMethod, putMethod, deleteMethod };
}

module.exports = shoppingCarController;
