import React from 'react';
import { Link } from 'react-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Header.css';

function Header({ title }) {
  return (
    <header>
      <h1 id="title">Tour of Heroes</h1>
      <div className="d-flex">
        <Link to="/" className="header-buttons">
          Dashboard
        </Link>
        <Link to="/" className="header-buttons">
          Heroes
        </Link>
      </div>
      <h2 className="mb-4">{title}</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect()(Header);
