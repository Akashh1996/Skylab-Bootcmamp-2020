import React, { useState } from 'react';
import './Header.css';
import UserLogin from './UserLogin/UserLogin';

function Header() {
  const [user, setUser] = useState(false);

  return (
    <div className="landing__header">
      <div className="header-title__container">
        <i className="fa fa-github" />
        <h1>
          {'Github\'s project '}
          {' '}
          {' '}
          {' '}
        </h1>
        <span className="database"> database</span>
      </div>

      <UserLogin props={{ user, setUser }} />
    </div>
  );
}

export default Header;
