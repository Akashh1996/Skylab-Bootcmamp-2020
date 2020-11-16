const products = require('../../api/products.json');

let basket = [];

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
    basket = basket.filter((product) => product.id !== productId);
  }
}

module.exports = Product;
