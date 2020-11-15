/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { getDetailProduct, addProductToCart } from '../redux/actions/productsActions';

function DetailProduct({ productDetail, dispatch }) {
  const { id } = useParams();
  const currentDetailData = productDetail;
  const newModel = useRef(id);

  useEffect(() => {
    if (currentDetailData && newModel.current !== currentDetailData['product-model']) {
      dispatch.getDetailProduct(id);
    }
    if (!currentDetailData) {
      dispatch.getDetailProduct(id);
    }
  }, []);

  return (
    <>
      {currentDetailData && newModel.current === currentDetailData['product-model'] && (
      <>
        <h1>{currentDetailData['product-name']}</h1>
        <div key={performance.now()}>
          <span>
            Modelo:
            {currentDetailData['product-model']}
          </span>
          <br />
          <span>
            Part/Number
            {' '}
            {currentDetailData['product-part-number']}
          </span>
          <br />
          <span>
            Serie:
            {' '}
            {currentDetailData['product-serie']}
          </span>
          <br />
          <span>
            Precio:
            {' '}
            {currentDetailData.price}
          </span>
          <br />
          {currentDetailData['product-image-url'].map((img) => (
            <img
              src={img}
              alt="logo"
              style={{ width: '300px' }}
              key={performance.now()}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => dispatch.addProductToCart({
            cartId: Date.now(),
            productName: currentDetailData['product-name'],
            productModel: currentDetailData['product-model'],
            price: currentDetailData.price,
          })}
        >
          add

        </button>
      </>
      )}
    </>
  );
}

DetailProduct.propTypes = {
  dispatch: PropTypes.shape({
    getDetailProduct: PropTypes.func.isRequired,
    addProductToCart: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    productDetail: state.productReducer.productDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getDetailProduct, addProductToCart }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
