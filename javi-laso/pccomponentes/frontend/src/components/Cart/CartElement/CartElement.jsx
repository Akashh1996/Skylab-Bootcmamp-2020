import React from 'react';
import { PropTypes } from 'prop-types';

function CartElement({ item }) {
  return <span>{item['product-name']}</span>;
}

CartElement.propTypes = {
  item: PropTypes.shape({
    'product-name': PropTypes.string,
  }).isRequired,
};

export default CartElement;
