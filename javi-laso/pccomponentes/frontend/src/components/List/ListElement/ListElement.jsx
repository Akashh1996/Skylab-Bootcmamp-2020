import React from 'react';
import { Link } from 'react-router-dom';
import './listElement.css';
import { PropTypes } from 'prop-types';

function ListElement({ item }) {
  return (
    <Link to={`/${item.id}`} className="no-link card__margins">
      <li key={+item.id} className="card-element">
        <img src={item['product-image']} alt="" className="card__img" />
        <div className="vertical-container card__info mt-5">
          <h2 className="card__title">{`${item.manufacturer} ${item['product-name']}`}</h2>
          <span className="card__name">{item['product-name']}</span>
          <span className="card__type">{item['product-type']}</span>
          <span className="card__price">{`${item.price.replace('.', ',')}€`}</span>
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
