import React from 'react';
import './Header.css';

function Header() {
  return (
    <>

      <header className="header">
        <h1>Redux Market</h1>
        <div className="basket">
          <i className="fa fa-shopping-basket" />
        </div>
      </header>

    </>
  );
}

export default Header;
