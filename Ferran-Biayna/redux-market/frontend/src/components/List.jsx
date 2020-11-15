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
    <>
      <ol>
        {products && products.length && products.map((product) => (
          <li>
            <div>
              <Link to={`/product/${product.id}`}><span>{product.name}</span></Link>
              <button type="button" value={product.id} onClick={() => dispatch(requestAddProducts(product.id))}>Add</button>
              <p><img alt={product.name} src={product.image} /></p>
              <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price)}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
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
