import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
      <Link to="/" id="market-title">Redux Market</Link>
      <div className="flex-spacer" />
      <Link to="/cart">
        <img
          src="https://img.icons8.com/windows/52/000000/shopping-cart.png"
          alt="cart-icon"
          id="header__cart"
        />

      </Link>
    </header>
  );
}

export default Header;
