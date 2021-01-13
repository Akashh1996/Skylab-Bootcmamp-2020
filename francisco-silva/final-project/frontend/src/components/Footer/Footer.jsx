/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer_wrapper">
        <div className="faqs--contct_wrapper">
          <p className="faqs_txt"><Link to="/faqs">FAQ'S</Link></p>
          <p className="contct_txt"><Link to="/contact">CONTACTOS</Link></p>
          <div className="social--net_wrapper">
            <a href="https://www.instagram.com/mariatchaa/"><img className="instagram-logo" src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbce4b8b21fee045a78cb83/0043b3ee779d54307881baa463d191d0/instagram-brands_(2).svg" alt="" /></a>
            <a href="https://www.facebook.com/mariatchaa/"><img className="facebook-logo" src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbce4b8b21fee045a78cb83/dc5e5af9909237d785cb9d8facf66215/facebook-brands.svg" alt="" /></a>
          </div>
        </div>
        <div className="logo_wrapper">
          <Link to="/"><img className="footer-logo" src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbce4b8b21fee045a78cb83/999c7ba4091044766dced2dee6afbcb9/Logo_Mariatcha.png" alt="" /></Link>
          <p className="created-by_txt">© 2037 by Cacauuuu. Proudly created by Diego Maradona</p>
        </div>
        <div className="social-contacts_wrapper">
          <p className="mobile-contct">
            Encomendas ou informações:
            <br />
            +351 918299501
          </p>
          <p className="email-contct">info@cacaucru.net</p>

        </div>

      </footer>
    </>
  );
}
