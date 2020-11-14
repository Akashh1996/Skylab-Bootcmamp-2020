import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ListElement from '../List/ListElement/ListElement';

function ShoppingCart({ cartList }) {
  return (
    <main>
      <ul>
        {cartList?.length > 0 && cartList.map((cartItem) => <ListElement item={cartItem} />)}
      </ul>
    </main>
  );
}

ShoppingCart.propTypes = {
  cartList: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ cartReducer }) {
  debugger;
  return { cartList: cartReducer.cartList };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
