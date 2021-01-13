import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import './footer.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-upper-container">
          <div className="footer-upper-container_left">
            <div className="footer-general-info">
              <div className="logo-footer">
                <img src="https://trello-attachments.s3.amazonaws.com/5fbbd4196bb5e92529d09cb2/330x344/8a8465305583a21ba6120f2337ba0638/LogoFooter.png" alt="logo-footer" />
                <p>
                  Nuestro objetivo es poder dar a conocer y apoyar causas sociales que necesitan
                  de la colaboración de todos, así como ofrecer una plataforma sencilla y accesible
                  de colaboración. Si quieres ayudar a cambiar el mundo...
                  {' '}
                  <br />
                  <br />
                  ¡Ayúdanos con cualquier pequeña acción!
                </p>
              </div>
            </div>
            <div className="social-networks">
              <span className="Facebook-icon social-networks__network">
                <FacebookIcon />
              </span>
              <span className="Youtube-icon social-networks__network">
                <YouTubeIcon />
              </span>
              <span className="Twitter-icon social-networks__network">
                <TwitterIcon />
              </span>
              <span className="Pinterest-icon social-networks__network">
                <PinterestIcon />
              </span>
              <span className="Instagram-icon social-networks__network">
                <InstagramIcon />
              </span>
            </div>
          </div>

          <hr />

          <div className="footer-upper-container_right">
            <div className="contact-info">
              <div className="contact-links">
                <p className="contact-links__link" data-test-id="contact-link">
                  Acerca de nosotros
                </p>
                <p className="contact-links__link">Contáctanos</p>
                <p className="contact-links__link">Sitemap</p>
                <p className="contact-links__link">Política de Privacidad</p>
              </div>
            </div>
            <hr />
            <div className="contact-info">
              <div className="contact-links">
                <p className="contact-links__link" data-test-id="contact-link">
                  Únete a nosotros
                </p>
                <p className="contact-links__link">Equipo humano</p>
                <p className="contact-links__link">ONG</p>
              </div>
            </div>
            <hr />
            <div className="contact-info">
              <div className="contact-links">
                <p className="contact-links__link">¿Necesitas ayuda?</p>
                <p className="contact-links__link">FAQs</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer__copyright">
        Copyright © 2020 - NoAlone Spain SLU - Skylab Coders Academy
      </div>
    </>
  );
}

export default Footer;
