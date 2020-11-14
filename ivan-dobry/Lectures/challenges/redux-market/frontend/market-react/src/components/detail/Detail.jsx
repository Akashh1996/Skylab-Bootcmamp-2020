/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProductDetail } from '../../redux/actions/marketActions';

function DetailProduct({ match, detailProduct, dispatch }) {
  debugger;
  const { detailId } = match.params;
  if (!detailProduct) {
    dispatch(requestProductDetail(detailId));
  }
  return (
    <>
      <h1>Details Page</h1>
      <p>{detailProduct?.name}</p>
      <img src={detailProduct?.image} alt="" />
      <span>
        price:
        {' '}
        {detailProduct?.price}
        €
      </span>

    </>
  );
}

function mapStateToProps({ marketReducer }) {
  return {
    detailProduct: marketReducer.productDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestProductDetail }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
