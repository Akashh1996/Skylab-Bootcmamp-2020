/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadProductList, getDetailProduct } from '../redux/actions/productsActions';
import ListCreateProduct from './ListCreateProduct';

function ListProduct({ products, dispatch }) {
  debugger;
  if (!products) {
    dispatch.loadProductList();
  }
  return (
    <div>
      Hello World
      <section>
        {products && products.map((product) => <ListCreateProduct data={product} />)}
      </section>
    </div>
  );
}

ListProduct.propTypes = {
  dispatch: PropTypes.shape({
    loadProductList: PropTypes.func.isRequired,
    getDetailProduct: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  debugger;
  return {
    productDetail: state.productReducer.productDetail,
    products: state.productReducer.productList,
  };
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    dispatch: bindActionCreators({ loadProductList, getDetailProduct }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
