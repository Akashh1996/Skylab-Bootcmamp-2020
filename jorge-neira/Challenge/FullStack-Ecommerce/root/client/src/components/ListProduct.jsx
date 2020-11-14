/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import loadProductList from '../redux/actions/productsActions';

function ListProduct({ products, dispatch }) {
  if (!products) {
    dispatch.loadProductList();
  }
  return (
    <div>
      Hello World
      <div>
        {products && products.map((product) => <span key={product.id}>{product['product-name']}</span>)}

      </div>
    </div>
  );
}

ListProduct.propTypes = {
  dispatch: PropTypes.shape({
    loadProductList: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.productReducer.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ loadProductList }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
