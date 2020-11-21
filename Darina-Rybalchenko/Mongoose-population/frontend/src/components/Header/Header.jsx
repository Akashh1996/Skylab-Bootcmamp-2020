import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './Header.css';

function Header() {
  return (
    <>
      <header>
        <Jumbotron className="jumbotron-user" fluid>
          <Container>
            <h1>Client details</h1>
          </Container>
        </Jumbotron>

      </header>
    </>
  );
}

export default Header;
