/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-shadow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestList, addToCarrito } from '../../redux/actions/listActions';
import './detail.css';

function productDetail({
  productList, actions, dispatch,
}) {
  let name = window.location.pathname;
  name = name.replaceAll('%', ' ').replaceAll('20', '').replaceAll('/', '').replaceAll('list', '');
  if (typeof (productList) === 'undefined') {
    dispatch(requestList());
  }
  return (
    <>
      <h1 id="title">Detail</h1>
      <nav>

        <p id="linkList"><Link id="datasheet" to="/fav/myfav">Fav</Link></p>
        <p id="linkList"> | </p>
        <p id="linkList"><Link id="list" to="/list">Return to List</Link></p>
      </nav>
      <div id="list-wrapper">
        {productList
        && productList?.length && productList.map((item) => {
          if (item.name === name) {
            return (
              <>
                <p id="list">
                  <p id="textList">
                    <span>{` ${item.name}` }</span>
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
                    <th>Name</th>
                    <th>Range</th>
                    <th>Type</th>
                    <th>Number of Shots</th>
                    <th>Strength</th>
                    <th>AP</th>
                    <th>Damage</th>
                    <th>Ability</th>
                  </tr>
                  <tr>
                    {item.name ? <td>{`${item.name}`}</td> : <td />}
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
                  {item.Overcharged
                    && <tr>
                      <td>
                        {`Profile: ${Object.getOwnPropertyNames(item)[8]}`}
                        {' '}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td>{`${item.Overcharged.S}`}</td>
                      <td>{`${item.Overcharged.Ap}`}</td>
                      <td>{`${item.Overcharged.D}`}</td>
                      <td>{`${item.Overcharged.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.frag
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[0]}`}</td>
                      {item.profile.frag.Range ? (<td>{`${item.profile.frag.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.frag.NoS ? <td>{`${item.profile.frag.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.frag.S}`}</td>
                      <td>{`${item.profile.frag.Ap}`}</td>
                      <td>{`${item.profile.frag.D}`}</td>
                      <td>{`${item.profile.frag.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.krak
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[1]}`}</td>
                      {item.profile.krak.Range ? (<td>{`${item.profile.krak.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.krak.NoS ? <td>{`${item.profile.krak.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.krak.S}`}</td>
                      <td>{`${item.profile.krak.Ap}`}</td>
                      <td>{`${item.profile.krak.D}`}</td>
                      <td>{`${item.profile.krak.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.icarus
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[2]}`}</td>
                      {item.profile.icarus.Range ? (<td>{`${item.profile.icarus.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.icarus.NoS ? <td>{`${item.profile.icarus.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.icarus.S}`}</td>
                      <td>{`${item.profile.icarus.Ap}`}</td>
                      <td>{`${item.profile.icarus.D}`}</td>
                      <td>{`${item.profile.icarus.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.Executioner_Round
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[0].replaceAll('_', ' ')}`}</td>
                      {item.profile.Executioner_Round.Range ? (<td>{`${item.profile.Executioner_Round.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.Executioner_Round.NoS ? <td>{`${item.profile.Executioner_Round.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.Executioner_Round.S}`}</td>
                      <td>{`${item.profile.Executioner_Round.Ap}`}</td>
                      <td>{`${item.profile.Executioner_Round.D}`}</td>
                      <td>{`${item.profile.Executioner_Round.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.Hyperfrag_Round
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[1].replaceAll('_', ' ')}`}</td>
                      {item.profile.Hyperfrag_Round.Range ? (<td>{`${item.profile.Hyperfrag_Round.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.Hyperfrag_Round.NoS ? <td>{`${item.profile.Hyperfrag_Round.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.Hyperfrag_Round.S}`}</td>
                      <td>{`${item.profile.Hyperfrag_Round.Ap}`}</td>
                      <td>{`${item.profile.Hyperfrag_Round.D}`}</td>
                      <td>{`${item.profile.Hyperfrag_Round.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.Mortis_Round
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[2].replaceAll('_', ' ')}`}</td>
                      {item.profile.Mortis_Round.Range ? (<td>{`${item.profile.Mortis_Round.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.Mortis_Round.NoS ? <td>{`${item.profile.Mortis_Round.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.Mortis_Round.S}`}</td>
                      <td>{`${item.profile.Mortis_Round.Ap}`}</td>
                      <td>{`${item.profile.Mortis_Round.D}`}</td>
                      <td>{`${item.profile.Mortis_Round.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.bolter
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[0]}`}</td>
                      {item.profile.bolter.Range ? (<td>{`${item.profile.bolter.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.bolter.NoS ? <td>{`${item.profile.bolter.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.bolter.S}`}</td>
                      <td>{`${item.profile.bolter.Ap}`}</td>
                      <td>{`${item.profile.bolter.D}`}</td>
                      <td>{`${item.profile.bolter.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.flamer
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[1]}`}</td>
                      {item.profile.flamer.Range ? (<td>{`${item.profile.flamer.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.flamer.NoS ? <td>{`${item.profile.flamer.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.flamer.S}`}</td>
                      <td>{`${item.profile.flamer.Ap}`}</td>
                      <td>{`${item.profile.flamer.D}`}</td>
                      <td>{`${item.profile.flamer.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.grav
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[1]}`}</td>
                      {item.profile.grav.Range ? (<td>{`${item.profile.grav.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.grav.NoS ? <td>{`${item.profile.grav.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.grav.S}`}</td>
                      <td>{`${item.profile.grav.Ap}`}</td>
                      <td>{`${item.profile.grav.D}`}</td>
                      <td>{`This Weapon becomes Damage ${item.profile.grav.grav_Effect.D} if the target has 3+ Save or better`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.melta
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[1]}`}</td>
                      {item.profile.melta.noMelta.Range ? (<td>{`${item.profile.melta.noMelta.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.melta.noMelta.NoS ? <td>{`${item.profile.melta.noMelta.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.melta.noMelta.S}`}</td>
                      <td>{`${item.profile.melta.noMelta.Ap}`}</td>
                      <td>{`${item.profile.melta.noMelta.D}`}</td>
                      <td>{`When firing at half the weapon range the Damage becomes ${item.profile.melta.meltaRange.D}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.plasma
                    && <tr>
                      <td>
                        {`Profile: ${Object.getOwnPropertyNames(item.profile)[1]}`}
                        {' '}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td>{`${item.profile.plasma.NoS}`}</td>
                      <td>{`${item.profile.plasma.S}`}</td>
                      <td>{`${item.profile.plasma.Ap}`}</td>
                      <td>{`${item.profile.plasma.D}`}</td>
                      <td>{`${item.profile.plasma.Ability}`}</td>
                    </tr>}
                  {item.profile && item.profile.plasma && item.profile.plasma.Overcharged
                    && <tr>
                      <td>
                        {`Profile: ${Object.getOwnPropertyNames(item.profile.plasma)[6]}`}
                        {' '}
                      </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td>{`${item.profile.plasma.Overcharged.S}`}</td>
                      <td>{`${item.profile.plasma.Overcharged.Ap}`}</td>
                      <td>{`${item.profile.plasma.Overcharged.D}`}</td>
                      <td>{`${item.profile.plasma.Overcharged.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.Dispersed
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[0]}`}</td>
                      {item.profile.Dispersed.Range ? (<td>{`${item.profile.Dispersed.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.Dispersed.NoS ? <td>{`${item.profile.Dispersed.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.Dispersed.S}`}</td>
                      <td>{`${item.profile.Dispersed.Ap}`}</td>
                      <td>{`${item.profile.Dispersed.D}`}</td>
                      <td>{`${item.profile.Dispersed.Ability}`}</td>
                    </tr>}
                  {item.profile
                    && item.profile.Focused
                    && <tr>
                      <td>{`Profile: ${Object.getOwnPropertyNames(item.profile)[1]}`}</td>
                      {item.profile.Focused.Range ? (<td>{`${item.profile.Focused.Range}"`}</td>) : (<td />)}
                      <td> </td>
                      {item.profile.Focused.NoS ? <td>{`${item.profile.Focused.NoS}`}</td> : (<td />)}
                      <td>{`${item.profile.Focused.S}`}</td>
                      <td>{`${item.profile.Focused.Ap}`}</td>
                      <td>{`${item.profile.Focused.D}`}</td>
                      <td>{`${item.profile.Focused.Ability}`}</td>
                    </tr>}
                </table>
                <br />
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
    productList: listReducer.productList,
    carritoList: listReducer.carritoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addToCarrito }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(productDetail);
