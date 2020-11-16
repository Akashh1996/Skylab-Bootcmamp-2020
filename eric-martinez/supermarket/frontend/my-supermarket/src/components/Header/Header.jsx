import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <h1>NORTH FACE OUTLET</h1>
      <nav className="super-navigation">
        <Link to="/products">New Releases</Link>
        <Link to="/products/basket">
        <span class="material-icons">
        shopping_cart
        </span>
        </Link>
      </nav>
    </>
  );
}
export default Header;
