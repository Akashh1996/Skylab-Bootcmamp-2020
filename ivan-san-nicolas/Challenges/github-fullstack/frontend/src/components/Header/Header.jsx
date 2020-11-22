import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import UserLogin from './UserLogin/UserLogin';

function Header() {
  const [user, setUser] = useState(false);

  return (
    <div className="landing__header">
      <div className="header-title__container">
        <i className="fa fa-github" />
        <Link to="/" className="landing__anchor">
          <h1>
            {'Github\'s project '}
            {' '}
            {' '}
            {' '}
          </h1>
          <span className="database"> database</span>
        </Link>
      </div>

      <UserLogin props={{ user, setUser }} />
    </div>
  );
}

export default Header;
