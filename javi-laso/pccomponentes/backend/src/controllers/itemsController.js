function itemsController(ItemsStore) {
  function getMethod(req, res) {
    try {
      res.status(200);
      res.send(ItemsStore.getItems());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.send(404);
    }
  }

  function getByIdMethod(req, res) {
    try {
      const { itemId } = req.params;

      res.status(200);
      res.send(ItemsStore.getItemById(itemId));
    } catch (error) {
      console.log(error);
      res.send(404);
    }
  }

  return { getMethod, getByIdMethod };
}

module.exports = itemsController;
