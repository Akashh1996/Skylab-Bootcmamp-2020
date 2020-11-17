import React from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestProduct,
  requestAddProducts,
} from '../actions/productsActions';

function Detail({ product, dispatch, actions }) {
  debugger;
  if (product?.id !== +window.location.pathname.split('/product/')[1] || !product) {
    actions.requestProduct(window.location.pathname.split('/product/')[1]);
  }

  return (
    <div className="detail-container">
      {product
          && (
            <div>
              <p>{`Product ID: #${product.id}`}</p>
              <span>{`Product Name: ${product.name}`}</span>
              <button type="button" value={product.id} onClick={() => dispatch(requestAddProducts(product))}>Add</button>
              <p>{`Category - ${product.category}`}</p>
              <p><img alt={product.name} src={product.image} /></p>
              <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price)}</p>
              <a href={product.url}>More Info</a>
            </div>
          )}
    </div>
  );
}

Detail.propTypes = {
  product: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    requestProduct: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ productsReducer }) {
  return {
    product: productsReducer.product,
    randomNumber: productsReducer.randomNumber,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      requestProduct,
      requestAddProducts,
    }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
