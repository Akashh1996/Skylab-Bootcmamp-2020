import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';
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
                  <div key={product.id} className="list-wrapper wrapper">
                    <Card style={{ width: '12rem', margin: '15px' }} className="card">
                      <Link to={`./${product.id}`}><Card.Img variant="top" src={product.image} className="imageList" /></Link>
                      <Link to={`./${product.id}`} className="detail_navigation">More Details</Link>

                    </Card>
                  </div>
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
