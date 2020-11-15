/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadProductList, getDetailProduct } from '../redux/actions/productsActions';

function ListProduct({ products, productDetail, dispatch }) {
  if (!products) {
    dispatch.loadProductList();
  }
  if (products) {
    dispatch.getDetailProduct('H500GV-HC002R');
  }
  return (
    <div>
      Hello World
      <div>
        <ul>
          {products && products.map((product) => <li key={product.id}>{product['product-model']}</li>)}
        </ul>
        <span>{productDetail['product-name']}</span>
      </div>
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
  return {
    productDetail: state.productReducer.productDetail,
    products: state.productReducer.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ loadProductList, getDetailProduct }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
