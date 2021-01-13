import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>

      <h1 id="footer-wrapper">About Us</h1>
      <footer id="footer_info">
        <div id="info_list">
          <ul id="company">
            Company

            <li id="blog">Blog</li>
            <li id="blog">Status</li>
            <li id="blog"> contact Us</li>
          </ul>

        </div>
        <div>
          <ul id="company">
            Support

            <li id="blog">Report a Bug</li>
            <li id="blog">Get Help</li>
            <li id="blog"> Donate</li>
          </ul>

        </div>

      </footer>
    </>
  );
}

export default Footer;
