import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListCreateProduct({ data, onAddToCartClicked }) {
  return (
    <>
      <div key={performance.now()}>
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
        <button
          type="button"
          key={performance.now()}
          onClick={onAddToCartClicked({
            cartId: Date.now(),
            productName: data['product-name'],
            productModel: data['product-model'],
            price: data.price,
          })}
        >
          Add
        </button>
        {' '}
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
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ListCreateProduct;
