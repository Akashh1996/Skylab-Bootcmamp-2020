import React from 'react';
import { Link } from 'react-router-dom';

const hero = {
  id: 12,
};

function Header() {
  return (
    <>
      <h1>Tour of heroes</h1>
      <nav className="toh-navigation">
        <Link to="/">Dashboard</Link>
        {' | '}
        <Link to="/heroes">Heroes</Link>
        {' | '}
        <Link to={`/heroes/${hero.id}`}>Narco details</Link>
      </nav>
    </>
  );
}

export default Header;
