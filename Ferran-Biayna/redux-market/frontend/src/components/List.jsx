import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestProducts,
  createRandomVariable,
} from '../actions/productsActions';

function ProductList({ products, dispatch }) {
  if (!products && !products?.length) {
    dispatch(requestProducts());
  }

  return (
    <>
      {products
&& products.length
&& products.map((pokemon) => <p>{pokemon.id}</p>)}
    </>
  );
}

function mapStateToProps({ productsReducer }) {
  return {
    products: productsReducer.products,
    randomNumber: productsReducer.randomNumber,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ createRandomVariable }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
