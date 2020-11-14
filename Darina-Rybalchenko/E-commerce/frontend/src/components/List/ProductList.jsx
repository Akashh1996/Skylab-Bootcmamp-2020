/* eslint-disable no-debugger */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import requestProducts from '../../redux/actions/product-actions';

function ProductList({ productsList, dispatch }) {
  if (!productsList && !productsList?.length) {
    dispatch(requestProducts());
  }
  return (
    <>
      {productsList && productsList.map((product) => (
        <p>{product['product-name']}</p>
      ))}
    </>
  );
}
ProductList.propTypes = {
  productsList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape([]).isRequired,

};

function mapStateToProps({ productReducer }) {
  debugger;
  return { productsList: productReducer.productsArray };
}

export default connect(mapStateToProps)(ProductList);
