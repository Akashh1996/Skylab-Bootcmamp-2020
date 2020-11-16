/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-shadow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestDatasheet, addToCarrito } from '../../redux/actions/listActions';
import './datasheetList.css';

function datasheetList({
  datasheet, actions, dispatch,
}) {
  if (typeof (datasheet) === 'undefined') {
    dispatch(requestDatasheet());
  }
  return (
    <>
      <h1 id="title">Datasheets List</h1>
      <nav>
        <p id="linkList"><Link id="List" to="/list">List</Link></p>
        <p id="linkList"><Link id="fav" to="/fav/myfav">Fav</Link></p>
      </nav>
      <div id="list-wrapper">
        {datasheet
        && datasheet?.length && datasheet.map((item) => <p key={item.name}>
          <span id="list">
            <Link id="list" to={`datasheets/${item.name}`}>
              <p id="textList">
                <span>{` ${item.name}` }</span>
              </p>
              <p id="textList"> | </p>
              <p id="textList">
                Point Cost:
                <span>{` ${item.points}`}</span>
              </p>
            </Link>
            <button id="shoppingButton" onClick={() => { actions.addToCarrito(item); }}>Add to Favourites</button>
          </span>
        </p>)}
      </div>
    </>
  );
}

function mapStateToProps({ listReducer }) {
  return {
    datasheet: listReducer.datasheet,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addToCarrito }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(datasheetList);
