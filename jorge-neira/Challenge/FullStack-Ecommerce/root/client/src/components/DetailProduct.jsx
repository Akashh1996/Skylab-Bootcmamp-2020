/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../redux/actions/productsActions';

function DetailProduct({ productDetail, dispatch }) {
  const { id } = useParams();
  if (!productDetail) {
    dispatch.getDetailProduct(id);
  }
  return (
    <>
      <h1>{productDetail && productDetail['product-name']}</h1>
      <div>
        {productDetail && (
          <>
            <span>
              Modelo:
              {productDetail['product-model']}
            </span>
            <br />
            <span>
              Part/Number
              {' '}
              {productDetail['product-part-number']}
            </span>
            <br />
            <span>
              Serie:
              {' '}
              {productDetail['product-serie']}
            </span>
            <br />
            <span>
              Precio:
              {' '}
              {productDetail.price}
            </span>
          </>
        )}
      </div>
    </>
  );
}

DetailProduct.propTypes = {
  dispatch: PropTypes.shape({
    getDetailProduct: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    productDetail: state.productReducer.productDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getDetailProduct }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
