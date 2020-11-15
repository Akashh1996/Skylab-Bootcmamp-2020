/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadProductList } from '../redux/actions/productsActions';
import ListCreateProduct from './ListCreateProduct';

function ListProduct({ products, dispatch }) {
  if (!products) {
    dispatch.loadProductList();
  }
  return (
    <div>
      <h1>Asus Market</h1>
      <section>
        {products && products.map((product) => <ListCreateProduct data={product} />)}
      </section>
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
    productDetail: state.productReducer.productDetail,
    products: state.productReducer.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ loadProductList }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
