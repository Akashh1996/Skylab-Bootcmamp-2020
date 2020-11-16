import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { requestCart, deleteProductCart } from '../../redux/actions/productAction';

function Cart({ productCartList, actions }) {
  if (!productCartList) {
    actions.requestCart();
  }
  useEffect(() => {
    actions.requestCart();
  }, []);

  return (
    <div className="detail_wrapper" style={{ marginTop: '100px' }}>
      {productCartList
               && productCartList.map((product) => (
                 <div key={performance.now()}>
                   {product.title}
                   {' '}
                   <button type="button" onClick={() => actions.deleteProductCart(product.id)}>x</button>
                   {' '}

                 </div>
               ))}
      <Link to="/" className="back">Back</Link>

    </div>
  );
}

Cart.propTypes = {
  productCartList: PropTypes.shape(
    [
      {
        title: PropTypes.string.isRequired,
        map: PropTypes.func.isRequired,
      },
    ],
  ).isRequired,
  actions: PropTypes.shape({
    requestCart: PropTypes.func.isRequired,
    deleteProductCart: PropTypes.func.isRequired,

  }).isRequired,
};

function mapStateToProps(state) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    productCartList: state.productReducer.productCartList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestCart, deleteProductCart }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
