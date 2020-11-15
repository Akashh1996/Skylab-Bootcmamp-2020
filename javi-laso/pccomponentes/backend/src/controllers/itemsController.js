function itemsController(ItemsStore) {
  function getMethod(req, res) {
    res.status(200);
    res.send(ItemsStore.getItems());
  }

  function getByIdMethod(req, res) {
    const { itemId } = req.params;

    res.status(200);
    res.send(ItemsStore.getItemById(itemId));
  }

  return { getMethod, getByIdMethod };
}

module.exports = itemsController;
