let shoppingCart = [];

class ShoppingCartStore {
  static getItems() {
    return shoppingCart;
  }

  static getItemById(itemId) {
    return shoppingCart.find((item) => item.id === itemId);
  }

  static addItem(item) {
    shoppingCart = [...shoppingCart, item];
  }

  static deleteItem(itemToDelete) {
    shoppingCart = shoppingCart.filter((item) => item.id !== itemToDelete);
  }
}

module.exports = ShoppingCartStore;
