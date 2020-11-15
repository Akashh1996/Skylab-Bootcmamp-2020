/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../redux/actions/productsActions';

function DetailProduct({ productDetail, dispatch }) {
  debugger;
  const { id } = useParams();
  // const [currentDetailData] = useState(productDetail);
  const currentDetailData = productDetail;
  const newModel = useRef(id);

  useEffect(() => {
    if (currentDetailData && newModel.current !== currentDetailData['product-model']) {
      debugger;
      dispatch.getDetailProduct(id);
    }
    if (!currentDetailData) {
      debugger;
      dispatch.getDetailProduct(id);
    }
  }, []);

  return (
    <>
      {currentDetailData && newModel.current === currentDetailData['product-model'] && (
      <>
        <h1>{currentDetailData['product-name']}</h1>
        <div>
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
        </div>
        <button type="button">add</button>
      </>
      )}
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
