import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return <header>
    <h1>Tour of Heroes</h1>
    <nav className="navigation">
        <Link to="/" className="nav-button">Dashboard</Link>
        <Link to="/heroes" className="nav-button">Heroes</Link>
    </nav>
</header>
}

export default Header