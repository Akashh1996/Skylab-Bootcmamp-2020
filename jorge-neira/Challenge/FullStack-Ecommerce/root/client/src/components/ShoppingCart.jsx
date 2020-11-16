import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { getCurrentCart, delProductFromCart } from '../redux/actions/productsActions';

// eslint-disable-next-line react/prop-types
function ShoppingCart({ currentCart = [], dispatch }) {
  // eslint-disable-next-line no-debugger
  debugger;
  // eslint-disable-next-line no-debugger
  if (currentCart.length < 0) {
    dispatch.getCurrentCart();
  }
  useEffect(() => {
    dispatch.getCurrentCart();
  }, []);

  return (
    <>
      {(currentCart && currentCart > 0)
        ? currentCart.map((cartProduct) => (
          <>
            <div key={performance.now()}>
              {`${cartProduct.productName} 
            ${cartProduct.productModel} 
            Price: ${cartProduct.price}€`}
            </div>
            <button
              type="button"
              key={performance.now()}
              onClick={() => dispatch.delProductFromCart(cartProduct.cartId)}
            >
              del
            </button>
          </>
        ))
        : <div>No hay articulos disponibles</div> }
    </>
  );
}

ShoppingCart.propTypes = {
  // currentCart: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.shape({
    getCurrentCart: PropTypes.func.isRequired,
    delProductFromCart: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  // eslint-disable-next-line no-debugger
  debugger;
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
