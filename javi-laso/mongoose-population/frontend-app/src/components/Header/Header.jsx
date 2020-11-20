import React from 'react';
import { connect } from 'react-redux';

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function mapStateToProps() {}

export default connect(mapStateToProps)(Header);
