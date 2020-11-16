const products = require('../../api/products.json');

const basket = [];

class Product {
  static getProducts() {
    return products;
  }

  static getProductById(productId) {
    return products.find((product) => product.id === productId);
  }

  static getBasket() {
    return basket;
  }

  static addProductToBasket(productId) {
    const product = products.find((element) => element.id === productId);
    basket.push(product);
  }

  static deleteProductFromBasket(productId) {
    const productIndex = basket.indexOf(products.find(
      (product) => product.id === productId,
    ));
    if (productIndex > -1) {
      basket.splice(productIndex, 1);
    }
  }
}

module.exports = Product;
