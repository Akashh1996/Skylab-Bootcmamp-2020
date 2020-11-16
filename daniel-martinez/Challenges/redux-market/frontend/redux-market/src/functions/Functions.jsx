import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart, deleteFromCart } from '../actions/marketActions';

export default class Functions {
  static getProductIndex(prods, product) {
    return prods.findIndex((prod) => prod === product);
  }

  static getProductName(product) {
    return product['product-name'].replace(/&trade;|&reg;/g, ' – ').toLowerCase();
  }

  static cartButton(product) {
    return (
      <button type="button" className="li-cart" onClick={addToCart(product)}>
        <img src="https://img.icons8.com/windows/52/000000/shopping-cart.png" alt="cart-icon" className="cart__icon" />
      </button>
    );
  }

  static deleteButton(product) {
    return (
      <button type="button" className="li-cross" onClick={deleteFromCart(product)}>
        <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" alt="cross-icon" className="cross__icon" />
      </button>
    );
  }

  static getProductList(prods, compo) {
    return (
      <>
        {prods.map((product) => (
          <>
            <Link to={`/products/${this.getProductIndex(prods, product)}`} key={this.getProductIndex(prods, product)}>
              <li className="li-block" key={this.getProductIndex(prods, product)}>
                <img className="li-image" alt={product['product-name']} src={product['product-image-url']} />
                {this.getProductName(product)}
                <br />
                <br />
                <p className="li-price">{`${product.price.toFixed(2)} €`}</p>
              </li>
            </Link>
            {compo === 'list'
            && <div>{this.cartButton(product)}</div>}
            {compo === 'cart'
            && <div>{this.deleteButton(product)}</div>}
          </>
        ))}
      </>
    );
  }
}
