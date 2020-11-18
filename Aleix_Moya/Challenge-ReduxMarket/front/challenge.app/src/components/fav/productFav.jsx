/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-shadow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestFav, deleteFromCarrito } from '../../redux/actions/listActions';
import './fav.css';

function productFav({ showFav, actions, dispatch }) {
  if (typeof (showFav) === 'undefined') {
    dispatch(requestFav());
  }
  return (
    <>
      <h1 id="title">Favourites</h1>
      <nav>
        <p><Link id="list" to="/">Return to List</Link></p>
      </nav>
      <div id="list-wrapper">
        {showFav
        && showFav?.length && showFav.map((item) => <p key={item.name}>
          <span id="list">
            <Link id="list" to={`/${item.name}`}>
              <p id="textList">
                <span>{` ${item.name}` }</span>
              </p>
              <p id="textList"> | </p>
              <p id="textList">
                Point Cost:
                <span>{` ${item.points}`}</span>
              </p>
            </Link>
            <button id="shoppingButton" onClick={() => { actions.deleteFromCarrito(item); requestFav(); }}>Remove from Favourites</button>
          </span>
        </p>)}
        <Link to="/fav/myfav"><button id="updateButton">Update</button></Link>
      </div>
    </>
  );
}

function mapStateToProps({ listReducer }) {
  return {
    showFav: listReducer.carritoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ deleteFromCarrito }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(productFav);
