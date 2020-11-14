const fetch = require('node-fetch');

let products = null;
let cart = [];

async function loadProducts() {
  try {
    const response = await fetch('/public/heroes.json');
    products = await response.json();
    return products;
  } catch (error) {
    return `This is an error ${error}`;
  }
}

class Product {
  static getProducts() {
    return loadProducts().then(products);
  }

  static getProductById(productId) {
    this.getProducts();
    return products.find((product) => product.id === productId);
  }

  static getCart() {
    return cart;
  }

  static addProduct(productId) {
    this.getProducts();
    cart.push(products.find((product) => product.id === productId));
  }

  static deleteProduct(productId) {
    cart = cart.filter((product) => product.id !== productId);
  }
}

module.exports = Product;
