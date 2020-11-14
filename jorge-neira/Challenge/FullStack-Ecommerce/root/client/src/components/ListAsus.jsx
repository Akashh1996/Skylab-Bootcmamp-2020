/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import loadProductList from '../redux/actions/productsActions';

function ListAsus({ products, dispatch }) {
  debugger;
  // eslint-disable-next-line react/prop-types
  if (!products) {
    debugger;
    dispatch.loadProductList();
  }
  debugger;
  return (
    <div>
      Hello World
      <div>
        {products && products.map((product) => <span key={product.id}>{product['product-name']}</span>)}

      </div>
    </div>
  );
}

ListAsus.propTypes = {
  dispatch: PropTypes.shape({
    loadProductList: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  debugger;
  return {
    products: state.productReducer.productList,
  };
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    dispatch: bindActionCreators({ loadProductList }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAsus);
