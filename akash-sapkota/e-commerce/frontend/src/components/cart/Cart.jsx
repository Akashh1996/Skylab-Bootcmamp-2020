import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { requestCart } from '../../redux/actions/productAction';

function Cart({ productCart, actions }) {
  if (!productCart) {
    actions.requestCart();
  }
  useEffect(() => {
    actions.requestCart();
  }, []);

  return (
    <div className="detail_wrapper" style={{ marginTop: '100px' }}>
      {productCart
               && productCart.map((product) => (
                 <div key={performance.now()}>
                   {product.title}
                   {' '}
                   <button type="button">x</button>
                   {' '}

                 </div>
               ))}
      <Link to="/" className="back">Back</Link>

    </div>
  );
}

Cart.propTypes = {
  productCart: PropTypes.shape(
    [
      {
        title: PropTypes.string.isRequired,
        map: PropTypes.func.isRequired,
      },
    ],
  ).isRequired,
  actions: PropTypes.shape({
    requestCart: PropTypes.func.isRequired,
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
