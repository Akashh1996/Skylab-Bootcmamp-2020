import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import { getCartProducts } from '../actions/marketActions';
import functions from '../functions/Functions';
import './Cart.css';

function Cart({ cartProducts, dispatch }) {
  if (!cartProducts) {
    dispatch.getCartProducts();
  }

  return (
    <>
      <Header />
      <h1 id="cart-title">Shopping Cart</h1>
      {(!cartProducts || cartProducts.length < 1) && (
      <h2>There are no products!</h2>
      )}
      {cartProducts && (
        <ul>
          {functions.getProductList(cartProducts, 'cart')}
        </ul>
      )}
    </>
  );
}

Cart.propTypes = {
  cartProducts: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape({
    getCartProducts: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    cartProducts: state.productReducer.cartProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getCartProducts }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
