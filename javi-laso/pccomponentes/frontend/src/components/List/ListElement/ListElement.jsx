import React from 'react';
import { Link } from 'react-router-dom';
import './listElement.css';
import { PropTypes } from 'prop-types';

function ListElement({ item }) {
  return (
    <Link to={`/${item.id}`} className="no-link card__margins">
      <li key={+item.id} className="card-element">
        <img src={item['product-image']} alt={item['product-name']} className="card__img mr-4" />
        <div className="d-flex flex-column card__info">
          <div className="flex-1" />
          <h2 className="card__title">{`${item.manufacturer} ${item['product-name']}`}</h2>
          <div className="flex-1" />
          <span className="card__type">{item['product-type']}</span>
          <div className="flex-1" />
          <span className="card__price">{`${item.price}€`}</span>
          <div className="flex-2" />
        </div>
      </li>
    </Link>
  );
}

ListElement.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    'product-name': PropTypes.string,
    'product-type': PropTypes.string,
    'product-image': PropTypes.string,
    manufacturer: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ListElement;
