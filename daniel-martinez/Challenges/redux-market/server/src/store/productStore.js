const products = require('../../public/products.json');

let cart = [];

class Product {
  static getProducts() {
    return products;
  }

  static getProductById(productId) {
    return products[productId];
  }

  static getCart() {
    return cart;
  }

  static addToCart(product) {
    cart.push(product);
  }

  static deleteFromCart(product) {
    cart = cart.filter((productFilter) => productFilter?.id !== product.id);
  }
}

module.exports = Product;
