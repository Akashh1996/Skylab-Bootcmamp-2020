import React from 'react';
import '../style.css'

function Header() {
    return (
        <header>
            <h1 class="main-title">Tour of Heroes</h1>
            <nav>
                <a class="nav-buttons" href="../dashboard/dashboard.html">Dashboard</a>
                <a class="nav-buttons" href="list-of-heroes.html">Heroes</a>
            </nav>
        </header>
    )
}

export default Header;