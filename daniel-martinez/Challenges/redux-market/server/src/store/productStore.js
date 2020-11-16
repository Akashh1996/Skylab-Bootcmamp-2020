const products = require('../../public/products.json');

const cart = [];

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
    cart.filter((productFilter) => productFilter['product-name'] !== product['product-name']);
  }
}

module.exports = Product;
