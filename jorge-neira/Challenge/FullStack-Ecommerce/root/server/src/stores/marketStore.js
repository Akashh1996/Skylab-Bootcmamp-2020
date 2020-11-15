const fs = require('fs');
const products = require('../../api/ecommerce.json');

class Products {
  static getProducts() {
    return products;
  }

  static getProductById(productModel) {
    return products.find((product) => product['product-model'] === productModel);
  }
}

module.exports = Products;
