import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Header.css';

function Header() {
  return (
    <>
      <Jumbotron>
        <section className="header__market">
          <h1>MARKET SKYLAB</h1>
          <button className="trolley" type="submit">carrito</button>
        </section> 
      </Jumbotron>
    </>
  );
}

export default Header;
