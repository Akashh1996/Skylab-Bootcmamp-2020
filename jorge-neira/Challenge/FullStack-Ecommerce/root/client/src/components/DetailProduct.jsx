/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { getDetailProduct } from '../redux/actions/productsActions';

function DetailProduct({ productDetail, dispatch }) {
  debugger;

  return (
    <div>
      <button type="button" onClick={() => dispatch.getDetailProduct('H500GV-HC002R')}>
        onClick
      </button>
      <span>
        {productDetail && productDetail['product-model']}
      </span>
    </div>
  );
}

DetailProduct.propTypes = {
  dispatch: PropTypes.shape({
    getDetailProduct: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  debugger;
  return {
    productDetail: state.productReducer.productDetail,
  };
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    dispatch: bindActionCreators({ getDetailProduct }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
