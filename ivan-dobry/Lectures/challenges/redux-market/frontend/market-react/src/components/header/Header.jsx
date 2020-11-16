import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Jumbotron>
        <section className="header__market">
          <Button
            as={Link}
            to="/"
            className="trolley"
            type="submit"
          >
            Home

          </Button>
          <h1>MARKET SKYLAB</h1>
          <Button
            as={Link}
            to="/shoppingCart"
            className="trolley"
            type="submit"
          >
            Shopping Cart

          </Button>
        </section>
      </Jumbotron>
    </>
  );
}

export default Header;
