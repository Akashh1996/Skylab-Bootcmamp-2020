/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import { sendMessage } from '../../redux/actions/productAction';

import './Contacts.css';

function Contacts({ dispatch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const ableToOpen = () => {
    if (name.length && email.includes('@') && subject.length && message.length) {
      handleClickOpen();
    }
  };

  return (
    <>

      <article className="contact_wrapper">
        <div className="title--text_wrapper">
          <div className="contact--title">
            <h1 className="main-title">CONTACTOS</h1>
          </div>
          <p className="contact-text">Entre em contacto connosco através do formulário e responderemos às suas questões.</p>
        </div>
        <div className="cards_wrapper">
          <form className="form_wrapper">
            <div className="name--email_wrapper">
              <input className="contact--input" id="name" type="text" value={name} onChange={(event) => { setName(event.target.value); }} placeholder="Nome *" required />
              <input className="contact--input" id="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); }} placeholder="Email *" required />
            </div>
            <input className="contact--input" id="subject" type="text" value={subject} onChange={(event) => { setSubject(event.target.value); }} placeholder="Assunto *" required />
            <textarea className="contact--input" id="message" as="text-area" value={message} onChange={(event) => { setMessage(event.target.value); }} placeholder="Mensagem *" required />
            <button
              type="button"
              id="cntct-pdd"
              className="modal-window modal submit-btn"
              onClick={() => {
                ableToOpen();
                dispatch(sendMessage({
                  name,
                  email,
                  subject,
                  message,
                }));
              }}
            >
              ENVIAR

            </button>
          </form>
          <section className="social-mail--contact_wrapper">
            <div className="social-mail_title_wrapper">
              <h3 className="social-mail_title">MARIATCHA</h3>
            </div>
            <div className="number-mail_wrapper">
              <div className="mail-txt_wrapper">
                <p>✉️</p>
                <p className="mail-txt">mariatcha@gmail.com</p>
              </div>
              <div className="number-txt_wrapper">
                <p>📞</p>
                <p className="number-txt">+351 912 799 501</p>
              </div>

            </div>
          </section>
        </div>
      </article>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="modal-msg">
          <div className="modal_title_wrapper">
            <h3 className="modal_title">MARIATCHA</h3>
          </div>
          <div className="number-mail_wrapper">
            <div className="modal-txt_wrapper">
              <p className="modal-txt">Obrigada pela sua mensagem</p>
              <p className="modal-txt">Responderemos tão breve quanto possível</p>
            </div>

          </div>
          <div className="modal-back-btn_wrapper">
            <button className="modal-back-btn"><Link to="/">VOLTAR</Link></button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function mapStateToProps({ productsReducers }) {
  return {
    productList: productsReducers.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
