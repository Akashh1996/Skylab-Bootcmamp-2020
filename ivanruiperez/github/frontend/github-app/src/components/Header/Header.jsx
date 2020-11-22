/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';

function Header() {
  /* const [logButton, setLogButton] = useState(null);
  function handleChange() {
    setLogButton(true);
  } */

  return (

    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <a className="navbar-brand" href="#">GITHUB PROJECTS</a>
      <div id="navb" className="navbar-collapse collapse hide">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="fas fa-user" />
              {' '}
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="fas fa-sign-in-alt" />
              {' '}
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps() {}

export default connect(mapStateToProps)(Header);
