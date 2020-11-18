import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './cartElement.css';
import { putItemInCart, deleteItemFromCart } from '../../../redux/actions/actions';

function CartElement({ product, actions }) {
  return (
    <div className="d-flex cart-element">
      <Link to={`/${product.product.id}`}>
        <img src={product.product['product-image']} alt={product.product['product-name']} className="cart-element__image" />
      </Link>
      <div className="d-flex flex-column">
        <Link to={`/${product.product.id}`}>
          <span className="cart-element__title">{`${product.product.manufacturer} ${product.product['product-name']}`}</span>
        </Link>
        <span className="cart-element__type">{`${product.product['product-type']}`}</span>
        <div className="flex-1" />
        <span>{`${product.product.price}€`}</span>
        <div className="flex-1" />
        <div className="d-flex">
          <button type="button" className="quantity-square square-button" id="delete-btn" onClick={() => { actions.deleteItemFromCart(product.product); }}>-</button>
          <span className="quantity-square">{`${product.quantity}`}</span>
          <button type="button" className="quantity-square square-button" id="add-btn" onClick={() => { actions.putItemInCart(product.product); }}>+</button>
        </div>
        <div className="flex-1" />
        <span>{`Total: ${(product.product.price * product.quantity).toFixed(2)}€`}</span>
        <div className="flex-1" />
      </div>
    </div>
  );
}

CartElement.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string,
      'product-name': PropTypes.string,
      'product-type': PropTypes.string,
      'product-image': PropTypes.string,
      manufacturer: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    putItemInCart: PropTypes.func.isRequired,
    deleteItemFromCart: PropTypes.func.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ putItemInCart, deleteItemFromCart }, dispatch) };
}

export default connect(null, mapDispatchToProps)(CartElement);
