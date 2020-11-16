import React from 'react';
import PropTypes, { number } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import { getProduct } from '../actions/marketActions';
import Functions from '../functions/Functions';

function Detail({ match, product, dispatch }) {
  const productId = +match.params.product;

  if (!product) {
    dispatch.getProduct(productId);
  }

  return (
    <>
      {product && product['product-name'] && (
        <>
          <Header />
          <section id="product">
            <p>{`Product ID: ${productId}`}</p>
            <img className="li-image" alt={product['product-name']} src={product['product-image-url']} />
            <p id="product-name">{`${Functions.getProductName(product)}`}</p>
            <p>{`${product.price}€`}</p>
            {Functions.cartButton()}
          </section>
        </>
      )}
    </>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      product: PropTypes.shape(''),
    }).isRequired,
  }).isRequired,
  product: PropTypes.shape({
    'product-name': PropTypes.shape(''),
    'product-image-url': PropTypes.shape(''),
    price: PropTypes.shape(number),
  }).isRequired,
  dispatch: PropTypes.shape({
    getProduct: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    product: state.productReducer.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getProduct }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
