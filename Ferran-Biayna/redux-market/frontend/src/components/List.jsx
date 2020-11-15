import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestProducts,
  createRandomVariable,
  requestAddProducts,
} from '../actions/productsActions';

function ProductList({ products, dispatch }) {
  if (!products && !products?.length) {
    dispatch(requestProducts());
  }

  return (
    <div className="list-container">
      {products && products.length && products.map((product) => (
        <div className="list-container__products">
          <Link className="products__links" to={`/product/${product.id}`}>
            <span>{product.name}</span>
            <p><img alt={product.name} src={product.image} /></p>
          </Link>
          <div className="products__price">
            {' '}
            <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price)}</span>
            <button type="button" value={product.id} onClick={() => dispatch(requestAddProducts(product.id))}>
              <span className="material-icons">
                shopping_cart
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    requestProducts: PropTypes.func.isRequired,
    requestAddProducts: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ productsReducer }) {
  return {
    products: productsReducer.products,
    randomNumber: productsReducer.randomNumber,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      requestProducts,
      createRandomVariable,
      requestAddProducts,
    }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
