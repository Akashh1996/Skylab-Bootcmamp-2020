import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './Header.css';

function Header() {
  return (
    <>
      <Jumbotron>
        <section className="header__market">
          <h1>MARKET SKYLAB</h1>
          <Button className="trolley" type="submit">carrito</Button>
        </section> 
      </Jumbotron>
    </>
  );
}

export default Header;
