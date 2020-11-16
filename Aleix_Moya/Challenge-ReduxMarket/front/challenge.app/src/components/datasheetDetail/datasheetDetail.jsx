/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-shadow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestDatasheet, addToCarrito } from '../../redux/actions/listActions';
import './detail.css';

function datasheetDetail({
  datasheet, actions, dispatch,
}) {
  let name = window.location.pathname;
  name = name.replaceAll('%', ' ').replaceAll('20', '').replaceAll('/', '').replaceAll('datasheets', '');
  if (typeof (datasheet) === 'undefined') {
    dispatch(requestDatasheet());
  }
  return (
    <>
      <h1 id="title">Detail Datasheet</h1>
      <nav>

        <p id="linkList"><Link id="datasheet" to="/fav/myfav">Fav</Link></p>
        <p id="linkList"> | </p>
        <p id="linkList"><Link id="list" to="/list">Return to List</Link></p>
      </nav>
      <div id="list-wrapper">
        {datasheet
        && datasheet?.length && datasheet.map((item) => {
          if (item.name === name) {
            return (
              <>
                <p id="list">
                  <p id="textList">
                    <span>{` ${item.name}` }</span>
                  </p>
                  <p id="textList"> | </p>
                  <p id="textList">
                    Slot:
                    <span>{` ${item.slot}`}</span>
                  </p>
                  <p id="textList"> | </p>
                  <p id="textList">
                    Point Cost:
                    <span>{` ${item.points}`}</span>
                  </p>
                  <button id="shoppingButton" onClick={() => { actions.addToCarrito(item); }}>Add to Favourites</button>
                </p>
                <table id="table">
                  <tr>
                    <th>Movement</th>
                    <th>WS</th>
                    <th>BS</th>
                    <th>S</th>
                    <th>T</th>
                    <th>W</th>
                    <th>A</th>
                    <th>Ld</th>
                    <th>Sv</th>
                  </tr>
                  {item.stats
                    && <tr>
                      <td>{item.stats.M}</td>
                      <td>{item.stats.WS}</td>
                      <td>{item.stats.BS}</td>
                      <td>{item.stats.S}</td>
                      <td>{item.stats.T}</td>
                      <td>{item.stats.W}</td>
                      <td>{item.stats.A}</td>
                      <td>{item.stats.Ld}</td>
                      <td>{item.stats.Sv}</td>
                    </tr>}
                </table>
                <br />
                <table>
                  <tr>
                    <th> </th>
                    <th>Number of Shots</th>
                    <th>Possibility to Hit</th>
                    <th>Number of Hits</th>
                    <th>Possibility to Wound</th>
                    <th>Number of Wounds</th>
                    <th>Possibility to Save</th>
                    <th>Number Unsaved Wounds</th>
                    <th>Wounds inflicted</th>
                    <th>Post Saved Rules</th>
                    <th>Dead Miniatures</th>
                    <th>Post Shooting Rules </th>
                  </tr>
                  <tr>
                    <td> </td>
                    {item.NoS !== undefined ? <td>{`${item.NoS}`}</td> : <td />}
                    {item.Range === 'Melee'
                      ? (item.Range ? (<td>{`${item.Range}`}</td>) : <td> </td>)
                      : (item.Range ? (<td>{`${item.Range}"`}</td>) : <td> </td>)}
                    {item.Type ? <td>{`${item.Type}`}</td> : <td />}
                    {item.Type === 'Melee'
                      ? (item.NoS ? (<td>{`${item.NoS}`}</td>) : <td>None</td>)
                      : (item.NoS ? (<td>{`${item.NoS}`}</td>) : <td> </td>)}
                    {item.S ? <td>{`${item.S}`}</td> : <td />}
                    {item.Ap ? <td>{`${item.Ap}`}</td> : <td />}
                    {item.D ? <td>{`${item.D}`}</td> : <td />}
                    {item.Ability ? <td>{`${item.Ability}`}</td> : <td />}
                  </tr>
                </table>
              </>
            );
          }
          return ('');
        })}
      </div>
    </>
  );
}

function mapStateToProps({ listReducer }) {
  return {
    datasheet: listReducer.datasheet,
    carritoList: listReducer.carritoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addToCarrito }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(datasheetDetail);
