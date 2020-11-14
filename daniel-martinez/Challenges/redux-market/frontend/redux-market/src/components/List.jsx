import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getProducts from '../actions/marketActions';

function List({ products, dispatch }) {
  if (!products) {
    dispatch.getProducts();
  }

  return (
    <>
      <h1>Market List</h1>
      {(!products) && (
      <h1>There are no products!</h1>
      )}
      {products && (
        <h2>THERE ARE PRODUCTS!</h2>
      )}
    </>
  );
}

List.propTypes = {
  products: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.shape({
    getProducts: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.productReducer.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getProducts }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
