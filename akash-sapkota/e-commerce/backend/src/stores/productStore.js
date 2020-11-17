/* let products = require('../../public/products.json');

let cart = [];

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

  static deleteProduct(productId) {
    cart = cart.filter((item) => item.id !== productId);
  }

  static getCart(){
    return cart
  }
  static addProduct(newProduct) {
    cart = [...cart, newProduct];
  }
}

module.exports = Product;
 */