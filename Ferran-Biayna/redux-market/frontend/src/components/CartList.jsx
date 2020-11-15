import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestCart,
  createRandomVariable,
  requestDeleteProduct,
} from '../actions/productsActions';

function CartList({ cart, dispatch }) {
  if (!cart && !cart?.length) {
    dispatch(requestCart());
  }

  return (
    <div>
      {cart && cart.length === 0 ? <p>Empty cart!</p> : (
        <>
          <p>{`Total - ${cart && cart.length && new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(cart.reduce((acc, product) => acc + product.price, 0))}`}</p>
          {cart && cart.length && cart.map((product) => (
            <div>
              <Link to={`/product/${product.id}`}><span>{product.name}</span></Link>
              <button type="button" value={product.id} onClick={() => dispatch(requestDeleteProduct(product.id))}>x</button>
              <p><img alt={product.name} src={product.image} /></p>
              <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price)}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

CartList.propTypes = {
  cart: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    requestCart: PropTypes.func.isRequired,
    requestDeleteProduct: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ productsReducer }) {
  return {
    cart: productsReducer.cart,
    randomNumber: productsReducer.randomNumber,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      requestCart,
      createRandomVariable,
      requestDeleteProduct,
    }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
