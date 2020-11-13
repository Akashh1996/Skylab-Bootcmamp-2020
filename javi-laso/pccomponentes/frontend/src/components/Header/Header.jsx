import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <nav className="header__navbar">
        <Link to="/" className="header__btn">Home</Link>
        <Link to="/shoppingcart" className="header__btn">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
