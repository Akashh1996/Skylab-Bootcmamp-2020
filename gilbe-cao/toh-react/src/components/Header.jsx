import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn, signOut } from '../actions/auth-actions';

const hero = {
  id: 12,
};

function Header() {
  const [isLogged] = useState(false);

  function isSignInVisible() {
    return isLogged
      ? <button type="button" onClick={(event) => { event.preventDefault(); signOut(); }}>Sign Out</button>
      : <button type="button" onClick={(event) => { event.preventDefault(); signIn('gilbe.cao@gmail.com', '12345678'); }}>Sign In</button>;
  }

  return (
    <>
      <h1>TOUR of HEROES</h1>
      <nav className="toh-navigation">
        <Link to="/">Dashboard</Link>
        {' | '}
        <Link to="/heroes">Heroes</Link>
        {' | '}
        <Link to={`/heroes/${hero.id}`}>Narco details</Link>
        {' | '}
        {isSignInVisible()}
      </nav>
    </>
  );
}

export default Header;
