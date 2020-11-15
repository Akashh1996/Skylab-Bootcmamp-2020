let products = require('../../public/products.json');

const cart = [];
class Product {
  static getProducts() {
    return products;
  }

  static getProductById(productId) {
    return products.find((product) => product.id === productId);
  }

  static addToCart(productId) {
    const cartProduct = products.find((product) => product.id === productId);
    cart.push(cartProduct);
  }

  static setProduct(newProduct) {
    products = products.map((product) => {
      if (product.id === newProduct.id) {
        return newProduct;
      }
      return product;
    });
  }

  static addProduct(newProduct) {
    products = [...products, newProduct];
  }

  static deleteProduct(productId) {
    products = products.filter((product) => product.id !== productId);
  }
}

module.exports = Product;
