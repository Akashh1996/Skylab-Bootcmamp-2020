import React from 'react';
import './footer2.css';

function Footer2() {
  return (
    <>

      <footer className="footer-wrapper">
        <div className="footer-title_wrapper">
          <h3 className="footer-title">About Us</h3>
        </div>
        <div className="footer-blocks_wrapper">
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
        </div>
      </footer>

    </>
  );
}

export default Footer2;
