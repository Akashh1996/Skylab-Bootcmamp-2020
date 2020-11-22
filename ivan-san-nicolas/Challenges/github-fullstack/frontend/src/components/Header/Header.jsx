import React, { useState } from 'react';
import './Header.css';

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

      {!user ? (
        <div className="landing__header--user-logged">
          <button type="button" className="login-button" onClick={() => setUser(!user)}>LOG IN</button>
        </div>
      ) : (
        <div className="landing__header--user-nologged">
          <button type="button" className="logout-button" onClick={() => setUser(!user)}>LOG OUT</button>
          <p>{user.name}</p>
          <i className="fa fa-user" />
          {/* <img src={user.profilePic} alt="" /> */}
        </div>
      )}
    </div>
  );
}

export default Header;
