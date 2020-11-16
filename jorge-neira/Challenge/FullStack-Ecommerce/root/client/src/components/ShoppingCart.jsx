import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { getCurrentCart } from '../redux/actions/productsActions';

function ShoppingCart({ cartList, dispatch }) {
  if (!cartList) {
    dispatch.getCurrentCart();
  }

  return (
    <>
      {cartList
        ? cartList.map((cartProduct) => (
          <div key={performance.now()}>
            {`${cartProduct.productName} 
        ${cartProduct.productModel} 
        Price: ${cartProduct.price}€`}
          </div>
        ))
        : <div>No hay articulos disponibles</div> }
    </>
  );
}

ShoppingCart.propTypes = {
  dispatch: PropTypes.shape({
    getCurrentCart: PropTypes.func.isRequired,
  }).isRequired,
  cartList: PropTypes.shape([]).isRequired,
};

function mapStateToProps(state) {
  return {
    cartList: state.productReducer.cartList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getCurrentCart }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
