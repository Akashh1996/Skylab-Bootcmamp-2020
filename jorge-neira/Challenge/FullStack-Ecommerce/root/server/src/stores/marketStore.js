const products = require('../../api/ecommerce.json');

const cartProducts = [];

class Products {
  static getProducts() {
    return products;
  }

  static getProductByProductName(productModel) {
    return products.find((product) => product['product-model'] === productModel);
  }

  static addProductToCart(product) {
    return cartProducts.push(product);
  }

  static delProductoFromCard(product) {
    return cartProducts.push(product);
  }
}

module.exports = Products;
