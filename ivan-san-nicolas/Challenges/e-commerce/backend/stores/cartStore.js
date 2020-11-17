let cart = require('../api/cart.json');
let sabers = require('../api/sabers.json');


class Cart {
    static getCart() {
        return cart;
    }

    static getSabers() {
        return sabers;
    }

    static addProductToCart(product) {
        cart[0]['product-list'].push(product);
    }
}

module.exports = Cart;