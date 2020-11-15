import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import CartElement from '../CartElement/CartElement';
import './shoppingCart.css';

function ShoppingCart({ cartList, cartSize }) {
  function calculateTotalPrice(cart) {
    let totalPrice = 0;
    Object.values(cart).forEach((arrayOfItems) => {
      totalPrice = arrayOfItems.reduce((acc, cur) => acc + +cur.price, totalPrice);
    });

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
          : Object.values(cartList)
            .map((arrayOfItems) => {
              if (arrayOfItems.length > 0) {
                return <CartElement arrayOfItems={arrayOfItems} key={arrayOfItems[0].id} />;
              }
              return null;
            })}
      </ul>
    </main>
  );
}

ShoppingCart.propTypes = {
  cartList: PropTypes.shape({}).isRequired,
  cartSize: PropTypes.number.isRequired,
};

function mapStateToProps({ cartReducer }) {
  return {
    cartList: cartReducer.cartList,
    cartSize: cartReducer.cartSize,
  };
}

export default connect(mapStateToProps)(ShoppingCart);
