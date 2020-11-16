import React from 'react';
import { Link } from 'react-router-dom';

function MarketHeader() {
  return (
    <>
      <button type="button">
        <Link to="/">List</Link>
      </button>
      <button type="button">
        <Link to="/cart">
          Cart
        </Link>
      </button>
      <div />
    </>
  );
}

export default MarketHeader;
