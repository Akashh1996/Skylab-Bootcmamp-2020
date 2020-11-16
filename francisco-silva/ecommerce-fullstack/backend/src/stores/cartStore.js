const cart = require('../../api/shoppingCart.json');
const products = require('../../api/products.json');

class Cart {
  static getCart() {
    return cart;
  }

  static getProducts() {
    return products;
  }

  static addProductToCart(product) {
    cart[0]['product-list'].push(product);
  }
}
module.exports = Cart;
