/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Checkout.css';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import { sendOrder, loadShoppingCart } from '../../redux/actions/productAction';

function Checkout({ dispatch, cartList, actions }) {
  useEffect(() => {
    if (!cartList || !cartList.length) {
      dispatch(loadShoppingCart());
    }
  }, [cartList, dispatch, actions]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const subTotal = (arr) => {
    const eachItemPrice = arr.map((item) => (item.quantity * parseInt(item.product[0].price)));
    const reducer = (acc, crValue) => acc + crValue;
    return eachItemPrice.reduce(reducer, 0);
  };

  return (
    <>
      <section className="main_wrapper">
        <div className="checkout--form_wrapper">

          <div className="check-title title--text_wrapper">
            <div className="contact--title">
              <h1 className="main-title">CHECKOUT</h1>
            </div>
            <p className="contact-text">Faremos todos os possíveis para que o seu pedido esteja pronto no tempo mais breve.</p>
          </div>
          <form id="check-form" className="check--form_wrapper">
            <div className="name--email_wrapper">
              <input className="contact--input" id="name" type="text" value={name} onChange={(event) => { setName(event.target.value); }} placeholder="Nome *" required />
              <input className="contact--input" id="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); }} placeholder="Email *" required />
            </div>
            <input className="contact--input" id="address" type="text" value={address} onChange={(event) => { setAddress(event.target.value); }} placeholder="Morada *" required />
            <div className="number--postal_wrapper">
              <input className="contact--input" id="phoneNumber" type="text" value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value); }} placeholder="Contacto *" required />
              <input className="contact--input" id="postalCode" type="text" value={postalCode} onChange={(event) => { setPostalCode(event.target.value); }} placeholder="Codigo Postal *" required />
            </div>
            <button
              type="button"
              id="fzr-pdd"
              className="modal-window modal submit-btn"
              onClick={() => {
                handleClickOpen();
              }}
            >
              FAZER PEDIDO

            </button>
          </form>

        </div>

        <div className="checkout--order_wrapper">
          <div id="items--checkout_wrapper">
            {cartList && cartList.length
          && cartList.map((item) => (
            <div className="item--cart_wrapper check--item">

              <li className="check--item item--cart">

                <span id="itm-qtt">{`${item.quantity} `}</span>
                <span>
                  {' '}
                  x
                  {` ${item.product[0].name} `}
                  -
                </span>
                <span className="price-txt check--price">{`  ${item.quantity * parseInt(item.product[0].price)} €`}</span>

              </li>

            </div>
          ))}
          </div>
          <div className="checkout--prc_wrapper">
            <span className="total--prc subtotal--checkout">
              Subtotal:
              {` ${subTotal(cartList)} `}
              €
            </span>
            <span className="dlvr--prc dlvr--checkout">Entrega: Grátis</span>
          </div>
        </div>

      </section>
      <Dialog
        id="dialog-modal"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="modal-submit-msg">
          <div className="modal_title_wrapper" />
          <div className="number-mail_wrapper">
            <div className="modal-txt_wrapper">
              <p className="modal-txt">Confirmar pedido?</p>
            </div>

          </div>
          <div className="modal-back-btn_wrapper">
            <button autoFocus className="modal-back-btn modal-cancel-btn" onClick={handleClose}>Cancelar</button>
            <Link to="/ty">
              <button
                id="env-pdd"
                className="modal-back-btn modal-submit-btn"
                onClick={() => {
                  handleClose();
                  dispatch(sendOrder({
                    name,
                    email,
                    phoneNumber,
                    address,
                    postalCode,
                    cartList,

                  }));
                }}
              >
                Enviar

              </button>

            </Link>
          </div>
        </div>
      </Dialog>

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
    actions: bindActionCreators({ }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
