let shoppingCart = {};

class ShoppingCartStore {
  static getItems() {
    return shoppingCart;
  }

  static addItem(item) {
    if (shoppingCart[`${item.id}`]) {
      shoppingCart = { ...shoppingCart, [item.id]: [...shoppingCart[`${item.id}`], item] };
    } else {
      shoppingCart = { ...shoppingCart, [item.id]: [item] };
    }
  }

  static deleteItem(itemToDelete) {
    if (shoppingCart[`${itemToDelete.id}`] && shoppingCart[`${itemToDelete.id}`].length > 0) {
      shoppingCart[`${itemToDelete.id}`].pop();
    }
  }

  static resetCart() {
    shoppingCart = {};
  }
}

module.exports = ShoppingCartStore;
