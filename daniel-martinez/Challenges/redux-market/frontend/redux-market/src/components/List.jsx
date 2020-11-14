import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getProducts from '../actions/marketActions';

function List({ products, actions }) {
  return (
    <>
      <h1>Market List</h1>
      {products && (
      <ul>
        <li>List</li>
      </ul>
      )}
      {(!products || !products.length) && (
      <>
        <h1>There are no products!</h1>
        <button type="button" onClick={() => actions.getProducts()}>
          Update Products
        </button>
      </>
      )}
    </>
  );
}

function mapStateToProps({ products }) {
  return {
    products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getProducts }, dispatch),
  };
}

List.propTypes = {
  products: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    getProducts: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
