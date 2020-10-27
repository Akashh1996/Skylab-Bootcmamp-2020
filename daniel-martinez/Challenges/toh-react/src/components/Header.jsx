import React from 'react';
import './Header.css'

function Header(){
    return <header>
        <h1 id="title">Tour of Heroes</h1>
        <nav id="nav">
            <button href="#" className="nav__buttons">Dashboard</button>
            <button href="#" className="nav__buttons">Heroes</button>
        </nav>
    </header>
}

export default Header;