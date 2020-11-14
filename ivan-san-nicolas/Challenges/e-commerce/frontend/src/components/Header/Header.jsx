import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <header className="header">
            <section className="header__icon">
                <Link to={"/sabers"}>
                    <img src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5faf189214f79954c01b58a0/b1e2b343b9508bc957180f5d14dbddce/icons8-rebel.svg"
                    alt="rebel-icon" id="header__icon__image"/>
                </Link>
            </section>
            <section className="header__logo">
                <Link to={"/sabers"}>
                    <img src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5faf189214f79954c01b58a0/779c2151717889911df954ca3f074c81/header-09.png"
                    alt="saberforge-logo" id="header__logo__image"/>
                </Link>
            </section>
            <section className="header__login">
                <span>Login</span>
                <img src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5faf189214f79954c01b58a0/95216924a158aa3fa65105c1247d9e93/icons8-male-user-48.png"
                alt="login-icon" id="header__login__image"/>
            </section>
        </header>
    );
}

export default Header;