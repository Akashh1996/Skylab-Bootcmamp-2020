import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import CartElement from '../CartElement/CartElement';

function ShoppingCart({ cartList }) {
  return (
    <main>
      <h1 className="mb-4">Your products</h1>
      <ul className="d-flex flex-column">
        {cartList?.length === 0
          ? <h3>You have not chosen products yet</h3>
          : cartList.map((cartItem) => <CartElement item={cartItem} />)}
      </ul>
    </main>
  );
}

ShoppingCart.propTypes = {
  cartList: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ cartReducer }) {
  return { cartList: cartReducer.cartList };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
