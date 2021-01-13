import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
  return (
    <div className="footer">
      <footer className="footer-container">
        <div className="footer__logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div>
              <img
                className="footer__logo"
                src="https://trello-attachments.s3.amazonaws.com/5fc0f7845fca4370bc8c6bca/5fc42c268a13fa2e375e47c5/ff411b0bcf88deb3885024870d73b989/Daria.wix-2.png"
                alt=""
              />
            </div>
          </Link>
        </div>

        <div className="flex-spacer" />
        <small>Copyright &copy;2020. Darina Rybalchenko. All rights reserved</small>
        <div className="flex-spacer" />
        <div className="footer__social">
          <a href="https://www.instagram.com/powerstretch.bcn/" target="_blank">
            <InstagramIcon className="social-link" />
          </a>
          <a href="https://www.facebook.com/barcelonaflexibility" target="_blank">
            <FacebookIcon className="social-link" />
          </a>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
