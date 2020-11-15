import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { requestProductDetail, cleanUp } from '../../redux/actions/productAction';

function ProductDetail({
  productDetail, dispatch, match, actions,
}) {
  const [id] = useState(match.params.productId);
  useEffect(() => {
    if (id) {
      dispatch(requestProductDetail(+id));
    }
    return () => actions.cleanUp();
  }, [id, dispatch]);

  return (
    <>
      {productDetail
               && (
               <div className="detail">
                 <div className="detail_description">
                   <h1>
                     {productDetail.title}
                   </h1>
                   <p>
                     Price:
                     {' '}
                     {productDetail.price}
                   </p>
                   <p>
                     Ceategoty :
                     {' '}
                     {productDetail.category}
                   </p>
                   <p>
                     Description :
                     {' '}
                     {productDetail.description}
                   </p>
                 </div>
                 <div className="image">
                   <img src={productDetail.image} alt="detail" />
                 </div>
               </div>
               )}
    </>
  );
}

ProductDetail.propTypes = {
  productDetail: PropTypes.shape({
    title: 'string',
    id: 1,
    image: 'string',
    price: 1,
    description: 'ghj',
    category: 'hgjh',
  }).isRequired,
  dispatch: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: {},
  }).isRequired,
  actions: PropTypes.shape({
    cleanUp: PropTypes.shape,
  }).isRequired,
};

function mapStateToProps(state) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    productDetail: state.productReducer.productDetail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ cleanUp }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
