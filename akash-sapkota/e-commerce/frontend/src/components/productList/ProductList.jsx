import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import requestProduct from '../../redux/actions/productAction';

function ProductList({ productList, dispatch }) {
  if (!productList && !productList?.length) {
    dispatch(requestProduct());
  }
  return (
    <div className="list-wrapper">
      {productList
                && productList.length
                && productList.map((product) => (
                  <p key={product.id}>
                    <span><Link to={`/${product.id}`}>{product.name}</Link></span>
                    <span>{product.id}</span>
                    <button type="button">x</button>

                  </p>
                ))}
    </div>
  );
}

ProductList.propTypes = {
  productList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape({}).isRequired,
};

function mapStateToProps(state) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    productList: state.productReducer.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
