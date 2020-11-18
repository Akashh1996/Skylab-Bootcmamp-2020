/* eslint-disable react/no-danger */
import React from 'react';
import { PropTypes } from 'prop-types';
import dompurify from 'dompurify';

function Detail({ location: { query: { product } } }) {
  const sanitizer = dompurify.sanitize;

  return (
    <>
      <h1 dangerouslySetInnerHTML={{
        __html: sanitizer(product['product-name']),
      }}
      />
      <img src={`${product['product-image-url']}`} alt="" />
      <p>
        {product.price}
        {' '}
        €
      </p>
    </>
  );
}

Detail.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({ product: PropTypes.shape({ 'product-name': PropTypes.string, 'product-image-url': PropTypes.string, price: PropTypes.number }).isRequired }).isRequired,
  }).isRequired,
  // actions: PropTypes.shape({
  //   requestProducts: PropTypes.func.isRequired,
  // }).isRequired,
};

export default Detail;
