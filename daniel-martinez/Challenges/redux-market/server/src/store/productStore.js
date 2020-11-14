const products = require('../../public/products.json');

class Product {
  static getProducts() {
    return products;
  }
}

module.exports = Product;
