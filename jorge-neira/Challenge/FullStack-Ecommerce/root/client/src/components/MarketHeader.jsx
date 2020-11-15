import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MarketHeader({ productCount }) {
  const [cartCount] = useState(productCount);
  return (
    <>
      <button type="button"><Link to="/">List</Link></button>
      <button type="button"><Link to="/product">Detail</Link></button>
      <div>{cartCount}</div>
    </>
  );
}

MarketHeader.propTypes = {
  productCount: PropTypes.number.isRequired,
};

function mapDispatchToProps(state) {
  return {
    productCount: state.productReducer.productCart,
  };
}

export default connect(mapDispatchToProps)(MarketHeader);
