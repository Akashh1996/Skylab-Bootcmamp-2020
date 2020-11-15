import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link to="/cart"><p>My Cart</p></Link>
      <Link to="/"><p>Products List</p></Link>
    </>
  );
}

export default Header;
