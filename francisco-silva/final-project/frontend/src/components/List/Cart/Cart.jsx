/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadShoppingCart, deleteItemFromCart, putItemInCart } from '../../../redux/actions/productAction';

import './Cart.css';

function Cart({ cartList, dispatch, actions }) {
  useEffect(() => {
    dispatch(loadShoppingCart());
  }, [cartList.length, dispatch]);

  const subTotal = (arr) => {
    const eachItemPrice = arr.map((item) => (item.quantity * parseInt(item.product[0].price)));
    const reducer = (acc, crValue) => acc + crValue;
    return eachItemPrice.reduce(reducer, 0);
  };

  return (

    <>

      <section className="list--cart_wrapper">

        <div className="order">
          <h2 className="order--title">Meu pedido</h2>

        </div>
        <div className="added--cart">

          {cartList && cartList.length
          && cartList.map((item) => (
            <div className="item--cart_wrapper">

              <li className="item--cart">
                <span id="itm-qtt">{`${item.quantity}`}</span>
                x
                {` ${item.product[0].name} `}
                -
                <span className="price-txt">{` ${item.quantity * parseInt(item.product[0].price)} €`}</span>

              </li>

              <div className="add-rmv--btn_wrapper">
                <span className="cart-remove-btn material-icons" onClick={() => { (actions.putItemInCart(item.product[0], 1, 'add')); }}>
                  add_circle_outline
                </span>
                <span id="cart-add-btn" className="cart-add-btn material-icons" onClick={() => { actions.putItemInCart(item.product[0], 1, 'delete'); }}>
                  remove_circle_outline
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="total--prc_wrapper">

          <span className="total--prc">
            Subtotal:
            {` ${subTotal(cartList)} `}
            €
          </span>
          <span className="dlvr--prc">Entrega: Grátis</span>
        </div>
        <div className="spcl--rqst_wraper">
          <input className="spcl--rqst_input" type="text" placeholder="Pedido especial?" />
        </div>
        <div className="btn_wrapper">
          <Link to="/checkout">
            <button id="pdr-btn" disabled={!cartList.length} className="buy--btn" type="button">
              PEDIR
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

function mapStateToProps({ cartReducer }) {
  return {
    cartList: cartReducer.cartList,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ deleteItemFromCart, putItemInCart }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
