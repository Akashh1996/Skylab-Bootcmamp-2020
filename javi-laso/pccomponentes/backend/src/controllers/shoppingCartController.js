function shoppingCarController(cartItemSchema) {
  function getMethod(req, res) {
    cartItemSchema.find({}, (error, cartList) => {
      if (error) {
        res.send(error);
      } else {
        res.send(cartList);
      }
    });
  }

  function patchMethod(req, res) {
    const { item, cartList } = req.body;
    delete item._id;
    const query = {}
    const conditionToUpdate = { `${cartList[item.id]}`: [...cartList[`${item.id}`], item] }
    const patchCallback = (error, newItem) => {
      if (error) {
        res.send(error);
      } else {
        res.send(newItem);
      }
    }
    cartItemSchema.updateOne(query, conditionToUpdate, patchCallback);
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

  return { getMethod, patchMethod, deleteMethod };
}

module.exports = shoppingCarController;
