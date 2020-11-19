import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <Link className="header-container__p" to="/cart"><p>MY CART</p></Link>
      <Link className="header-container__p" to="/"><p>PRODUCTS</p></Link>
    </div>
  );
}

export default Header;
