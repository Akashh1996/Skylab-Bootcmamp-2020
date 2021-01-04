import React from 'react';
import '../Styles/dashboard.css'

function Header() {
    return (
        <div id="general-container">
            <div id="main-container" >
                <header>
                    <div className="title">Tour of Heroes</div>
                    <div className="options">
                        <div id="option-dashboard">
                            <a href="../dashboard/dashboard.html">Dashboard</a>
                        </div>
                        <div id="option-heroes">
                            <a href="../list/list.html">Heroes</a>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header;