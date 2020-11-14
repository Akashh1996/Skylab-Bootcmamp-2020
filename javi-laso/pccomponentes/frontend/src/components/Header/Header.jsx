import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadShoppingCart } from '../../redux/actions/actions';

function Header({ cartSize, actions }) {
  useEffect(() => {
    actions.loadShoppingCart();
  }, []);

  return (
    <header>
      <nav className="header__navbar">
        <Link to="/" className="header__btn">Home</Link>
        <div className="flex-1" />
        <Link to="/shoppingcart" className="header__btn cart-btn">
          <span className="material-icons">shopping_cart</span>
          <span className="cart-items">{cartSize}</span>
        </Link>
      </nav>
    </header>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number,
  actions: PropTypes.shape({
    loadShoppingCart: PropTypes.func.isRequired,
  }).isRequired,
};

Header.defaultProps = {
  cartSize: 0,
};

function mapStateToProps({ cartReducer }) {
  return { cartSize: cartReducer.cartSize };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ loadShoppingCart }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
