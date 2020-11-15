const products = require('../../api/ecommerce.json');

class Products {
  static getProducts() {
    return products;
  }

  static getProductByProductName(productModel) {
    return products.find((product) => product['product-model'] === productModel);
  }
}

module.exports = Products;
