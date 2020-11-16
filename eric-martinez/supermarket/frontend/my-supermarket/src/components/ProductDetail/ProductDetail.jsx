import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProduct, cleanProductDetail } from '../../redux/actions/superActions';

function ProductDetail({
  match, product, dispatch, actions,
}) {
  const [productId] = useState(+match.params.productId);

  useEffect(() => {
    if (productId) {
      dispatch(requestProduct(productId));
    }
    return () => actions.cleanProductDetail();
  }, [productId, dispatch, actions]);
  return (
    <>
      {product
            && <h1>{product['product-name']}</h1>}
      {product
            && <img src={product['product-image-url']} alt="product img" />}
    </>
  );
}

function mapStateToProps(state) {
  return {
    product: state.superReducer.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ cleanProductDetail }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
