/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from '../actions/marketActions';
import './List.css';
import Header from './Header';
import functions from '../functions/Functions';

function List({ products, dispatch }) {
  if (!products) {
    dispatch.getProducts();
  }

  return (
    <>
      <Header />
      {(!products) && (
      <h1>There are no products!</h1>
      )}
      {products && (
        <ul>
          {functions.getProductList(products, 'list')}
        </ul>
      )}
    </>
  );
}

List.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape({
    getProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.productReducer.productList,
    cartProducts: state.productReducer.cartProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getProducts }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
