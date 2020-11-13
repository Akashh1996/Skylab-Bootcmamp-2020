import React from 'react';
import './listElement.css';
import { PropTypes } from 'prop-types';

function ListElement({ item }) {
  return (
    <li key="" className="card-element">
      <img src={item['product-image']} alt="" className="card__img" />
      <h3 className="card__title">Title</h3>
      <span className="card__name">{item['product-name']}</span>
      <span className="card__manufacturer">{item.manufacturer}</span>
      <span className="card__price">{item.price}</span>

    </li>
  );
}

ListElement.propTypes = {
  item: PropTypes.shape({
    'product-name': PropTypes.string,
    'product-image': PropTypes.string,
    manufacturer: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ListElement;
