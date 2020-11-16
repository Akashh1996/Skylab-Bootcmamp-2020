import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <h1>SUPERMARKET</h1>
      <nav className="super-navigation">
        <Link to="/products">Products</Link>
        {' | '}
        <Link to="/products/basket">Basket</Link>
      </nav>
    </>
  );
}
export default Header;