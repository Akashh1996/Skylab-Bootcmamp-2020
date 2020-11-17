import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid/non-secure';
import { getCurrentCart, delProductFromCart } from '../redux/actions/productsActions';

function ShoppingCart({ currentCart, dispatch }) {
  useEffect(() => {
    dispatch.getCurrentCart();
  }, []);
  return (
    <>
      {(currentCart)
        ? currentCart.map((cartProduct) => (
          <>
            <div key={nanoid()}>
              {`${cartProduct.productName} 
            ${cartProduct.productModel} 
            Price: ${cartProduct.price}€`}
            </div>
            <button
              type="button"
              key={nanoid()}
              onClick={() => dispatch.delProductFromCart(cartProduct.cartId)}
            >
              del
            </button>
          </>
        ))
        : <div key={nanoid()}>No hay articulos disponibles</div> }
    </>
  );
}

ShoppingCart.propTypes = {
  currentCart: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
  }),
  dispatch: PropTypes.shape({
    getCurrentCart: PropTypes.func.isRequired,
    delProductFromCart: PropTypes.func.isRequired,
  }).isRequired,
};

ShoppingCart.defaultProps = {
  currentCart: undefined,
};

function mapStateToProps(state) {
  return {
    currentCart: state.productReducer.cartList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getCurrentCart, delProductFromCart }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
