import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListCreateProduct({ data }) {
  return (
    <>
      <div key={Date.now()}>
        <Link to={`product/${data['product-model']}`}>
          <span>
            {data['product-name']}
            {' '}
            Precio:
            {' '}
            {data.price}
          </span>
        </Link>
        {' '}
        <button type="button">Add</button>
        {' '}
        <button type="button">del</button>
      </div>
    </>
  );
}

ListCreateProduct.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    'product-model': PropTypes.string.isRequired,
    'product-name': PropTypes.string.isRequired,
  }).isRequired,
};

export default ListCreateProduct;
