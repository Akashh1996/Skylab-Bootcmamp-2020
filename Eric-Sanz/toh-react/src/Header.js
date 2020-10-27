import React from 'react';

function Header() {
    return (
        <header className="header-container">
            <h1 className="header-title">Tour of Heroes</h1>
            <nav>
                <button className="nav-btn">Dashboard</button>
                <button className="nav-btn">Heroes</button>
            </nav>
        </header>
    )
}

export default Header;