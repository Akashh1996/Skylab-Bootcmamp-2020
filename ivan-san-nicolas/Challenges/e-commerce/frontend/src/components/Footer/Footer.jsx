import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {

    const saberForgeURL = "https://saberforge.com/";
    const saberForgeText = "saberforge.com";
    const starWarsURL = "https://www.starwars.com/";
    const starWarsText = "starwars.com";

    return (
        <section className="footer">
            <div className="footer__contact">
                <span>Official Store:</span>
                <a href={saberForgeURL} target="_blank" rel="noreferrer">
                    <span>{saberForgeText}</span>
                </a>
            </div>
            <div className="footer__robot-image">
                <img src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5faf189214f79954c01b58a0/79b7ea0e974f6736f409d787ca4c4b71/37cce690eb6c110b73145fc0ed21cb50_(1).png"
                alt="footer-robot-icon" id="footer__robot-image"/>
            </div>
            <div className="footer__contact">
                <span>Official Star Wars page:</span>
                <a href={starWarsURL} target="_blank" rel="noreferrer">
                    <span>{starWarsText}</span>
                </a>
            </div>
        </section>
    );
}

export default Footer;