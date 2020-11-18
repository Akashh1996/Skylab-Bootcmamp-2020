/* eslint-disable array-callback-return */
const products = require('../public/store.json');

let shoppingList = [];

class Market {
  static getMarket() {
    return products;
  }

  static getProductById(productId) {
    return products.find((product) => product.id === productId);
  }

  static getShoppingList() {
    return shoppingList;
  }

  static addShoppingList(productId) {
    return products.map((product) => {
      if (product.id === productId) {
        shoppingList.push(product);
      }
    });
  }

  static deleteFromShoppingList(productId) {
    shoppingList = shoppingList.filter((element) => element.id !== productId);
  }
}

module.exports = Market;
