import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import CartElement from '../CartElement/CartElement';
import './shoppingCart.css';

function ShoppingCart({ cartList, cartSize }) {
  function calculateTotalPrice(cartArray) {
    const totalPrice = cartArray.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0);

    return totalPrice;
  }

  return (
    <main>
      <div className="d-flex">
        <h1 className="mb-4">Your products</h1>
        <div className="flex-3" />
        <span className="total-price">{`Total: ${calculateTotalPrice(cartList).toFixed(2)}€`}</span>
        <div className="flex-1" />
      </div>
      <ul className="d-flex flex-column">
        {cartSize === 0
          ? <h3 className="no-products">You have not chosen products yet</h3>
          : cartList.map((product) => {
            if (product.quantity > 0) {
              return (
                <CartElement
                  product={product}
                  key={performance.now() * Math.random()}
                />
              );
            }
            return null;
          })}
      </ul>
    </main>
  );
}

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartSize: PropTypes.number.isRequired,
};

function mapStateToProps({ cartReducer }) {
  return {
    cartList: cartReducer.cartList,
    cartSize: cartReducer.cartSize,
  };
}

export default connect(mapStateToProps)(ShoppingCart);
