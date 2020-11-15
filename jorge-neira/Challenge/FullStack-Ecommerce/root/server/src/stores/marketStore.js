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

  static addProductToCart(product) {
    if (cartProducts.length > 0) {
      cartProducts = cartProducts.map((cartProduct) => {
        let updatedProductItem;
        if (cartProduct.id === product.id) {
          updatedProductItem = product.items + cartProduct.items;
          return { ...cartProduct, updatedProductItem };
        }
        return updatedProductItem;
      });
    } else {
      cartProducts = [...cartProducts, product];
    }
    return cartProducts;
  }

  static delProductoFromCard(product) {
    return cartProducts.push(product);
  }
}

module.exports = Products;
