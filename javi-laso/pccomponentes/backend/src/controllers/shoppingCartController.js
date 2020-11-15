function shoppingCarController(ShoppingCartStore) {
  function getMethod(req, res) {
    res.status(200);
    res.send(ShoppingCartStore.getItems());
  }

  function putMethod(req, res) {
    const { item } = req.body;
    ShoppingCartStore.addItem(item);
    res.status(204);
    res.send(ShoppingCartStore.getItems());
  }

  function deleteMethod(req, res) {
    const item = req.body;
    ShoppingCartStore.deleteItem(item);
    res.status(200);
    res.send(ShoppingCartStore.getItems());
  }

  return { getMethod, putMethod, deleteMethod };
}

module.exports = shoppingCarController;
