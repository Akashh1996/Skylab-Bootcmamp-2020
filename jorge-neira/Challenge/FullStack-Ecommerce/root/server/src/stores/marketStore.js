const products = require('../../api/ecommerce.json');
let cartProducts = require('../../api/cart.json');

class Products {
  static getProducts() {
    return products;
  }

  static getProductByProductName(productModel) {
    return products.find((product) => product['product-model'] === productModel);
  }

  static getCurrentCart() {
    return cartProducts;
  }

  static addProductToCart(cartproduct) {
    cartProducts = [...cartProducts, cartproduct];
  }

  static delProductoFromCart(cartProduct) {
    cartProducts = cartProducts.filter((currentProduct) => currentProduct.cartId
    !== cartProduct.cartId);
  }
}

module.exports = Products;
