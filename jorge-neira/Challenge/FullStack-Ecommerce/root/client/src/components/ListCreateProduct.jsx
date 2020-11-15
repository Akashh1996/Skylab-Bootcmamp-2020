import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListCreateProduct({ data }) {
  debugger;
  return (
    <>
      <div key={Date.now()}>
        <Link to="product">
          {data['product-name']}
        </Link>
      </div>
    </>
  );
}

ListCreateProduct.propTypes = {
  data: PropTypes.shape({
    'product-name': PropTypes.string.isRequired,
  }).isRequired,
};

export default ListCreateProduct;
