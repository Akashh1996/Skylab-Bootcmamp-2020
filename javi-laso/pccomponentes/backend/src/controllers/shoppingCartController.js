function shoppingCarController(ShoppingCartStore) {
  function getMethod(req, res) {
    try {
      const cartItems = ShoppingCartStore.getItems();
      console.log(cartItems);
      res.status(200);
      res.send(cartItems);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(404);
      res.send(error);
    }
  }

  function putMethod(req, res) {
    try {
      const { item } = req.body;
      ShoppingCartStore.addItem(item);
      res.status(201);
      res.send(ShoppingCartStore.getItems());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(400);
      res.send(error);
    }
  }

  function deleteMethod(req, res) {
    try {
      const { id } = req.query;
      const itemToDelete = ShoppingCartStore.getItemById(id);
      if (itemToDelete) {
        ShoppingCartStore.deleteItem(itemToDelete);
        res.status(200);
        res.send(ShoppingCartStore.getItems());
      } else {
        res.status(400);
        res.send('There is no such item in the shopping cart');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(400);
      res.send(error);
    }
  }

  return { getMethod, putMethod, deleteMethod };
}

module.exports = shoppingCarController;
