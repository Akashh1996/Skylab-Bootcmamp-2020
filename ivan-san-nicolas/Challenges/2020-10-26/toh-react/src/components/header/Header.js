import React from 'react';
import './header.css';
import Nav from './nav/Nav';

function Header() {
    return <header class="header">
        <span class="header__title">Tour of Heroes</span>
        <Nav/>
    </header>
}

export default Header;