import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { requestCart } from '../../redux/actions/productAction';

function Cart({
  productCart, dispatch, actions,
}) {
  if (!productCart) {
    dispatch(actions.requestCart());
  }

  return (
    <div className="detail_wrapper">
      {productCart
               && (
               <>
                 <div className="detail">
                   <div className="detail_description">
                     <h1>
                       akash sapkota
                     </h1>
                     <p>
                       <u>Price:</u>
                       {' '}
                       {productCart.price}
                     </p>
                     <p>
                       <u>Ceategory :</u>
                       {' '}
                       {productCart.category}
                     </p>
                     <p>
                       <u>Description :</u>
                       {productCart.description}
                     </p>

                   </div>
                   <div className="image">
                     <img src={productCart.image} alt="detail" />
                   </div>

                 </div>
                 <Link to="/" className="back">Back</Link>
               </>
               )}
    </div>
  );
}

Cart.propTypes = {
  productCart: PropTypes.shape({
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
    requestCart: PropTypes.shape(),
  }).isRequired,
};

function mapStateToProps(state) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    productCart: state.productReducer.productCart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestCart }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
