import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { requestProductDetail, addCart } from '../../redux/actions/productAction';

function ProductDetail({
  productDetail, dispatch, match, actions,
}) {
  const [id] = useState(match.params.productId);
  useEffect(() => {
    if (id) {
      dispatch(requestProductDetail(+id));
    }
  /*   return () => actions.cleanUp(); */
  }, [id, dispatch]);

  return (
    <div className="detail_wrapper">
      {productDetail
               && (
               <>
                 <div className="detail">
                   <div className="detail_description">
                     <h1>
                       {productDetail[0].title}
                     </h1>
                     <p>
                       <u>Price:</u>
                       {' '}
                       {productDetail[0].price}
                     </p>
                     <p>
                       <u>Ceategory :</u>
                       {' '}
                       {productDetail[0].category}
                     </p>
                     <p>
                       <u>Description :</u>
                       {productDetail[0].description}
                     </p>
                     <Link to="/cart" className="cart" onClick={() => { actions.addCart(productDetail[0]); }}>Add To Cart</Link>

                   </div>
                   <div className="image">
                     <img src={productDetail[0].image} alt="detail" />
                   </div>

                 </div>
                 <Link to="/" className="back">Back</Link>
               </>
               )}
    </div>
  );
}

ProductDetail.propTypes = {
  productDetail: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
  })),
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({

    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  actions: PropTypes.shape({
    cleanUp: PropTypes.func,
    addCart: PropTypes.func,
  }).isRequired,
};

ProductDetail.defaultProps = {
  productDetail: undefined,
};

function mapStateToProps(state) {
  return {
    productDetail: state.productReducer.productDetail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addCart }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
