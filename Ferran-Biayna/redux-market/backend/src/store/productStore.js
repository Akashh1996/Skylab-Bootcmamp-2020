import axios from 'axios';

let products = null;
let cart = [];

async function loadProducts() {
  products = await axios.get('../../public/products.json');
  return products;
}

class Product {
  static getProducts() {
    return loadProducts();
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
