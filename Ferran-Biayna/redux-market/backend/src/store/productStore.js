const products = require('../../public/products.json');

let cart = [];

class Product {
  static getProducts() {
    return products;
  }

  static getProductById(productId) {
    return products.find((product) => product.id === productId);
  }

  static getCart() {
    return cart;
  }

  static addProduct(productId) {
    cart.push(products.find((product) => product.id === productId));
  }

  static deleteProduct(productId) {
    cart = cart.filter((product) => product.id !== productId);
  }
}

module.exports = Product;
