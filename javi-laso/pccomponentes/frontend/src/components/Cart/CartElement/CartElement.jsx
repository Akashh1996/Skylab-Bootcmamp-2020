import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './cartElement.css';
import { putItemInCart, deleteItemFromCart } from '../../../redux/actions/actions';

function CartElement({ arrayOfItems, actions }) {
  return (
    <div className="d-flex cart-element">
      <Link to={`/${arrayOfItems[0].id}`}>
        <img src={arrayOfItems[0]['product-image']} alt={arrayOfItems[0]['product-name']} className="cart-element__image" />
      </Link>
      <div className="d-flex flex-column">
        <Link to={`/${arrayOfItems[0].id}`}>
          <span className="cart-element__title">{`${arrayOfItems[0].manufacturer} ${arrayOfItems[0]['product-name']}`}</span>
        </Link>
        <span className="cart-element__type">{`${arrayOfItems[0]['product-type']}`}</span>
        <div className="flex-1" />
        <span>{`${arrayOfItems[0].price}€`}</span>
        <div className="flex-1" />
        <div className="d-flex">
          <button type="button" className="quantity-square square-button" id="delete-btn" onClick={() => { actions.deleteItemFromCart(arrayOfItems[0]); }}>-</button>
          <span className="quantity-square">{`${arrayOfItems.length}`}</span>
          <button type="button" className="quantity-square square-button" id="add-btn" onClick={() => { actions.putItemInCart(arrayOfItems[0]); }}>+</button>
        </div>
        <div className="flex-1" />
        <span>{`Total: ${(arrayOfItems[0].price * arrayOfItems.length).toFixed(2)}€`}</span>
        <div className="flex-1" />
      </div>
    </div>
  );
}

CartElement.propTypes = {
  arrayOfItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    'product-name': PropTypes.string,
    'product-type': PropTypes.string,
    'product-image': PropTypes.string,
    manufacturer: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
  actions: PropTypes.shape({
    putItemInCart: PropTypes.func.isRequired,
    deleteItemFromCart: PropTypes.func.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ putItemInCart, deleteItemFromCart }, dispatch) };
}

export default connect(null, mapDispatchToProps)(CartElement);
