import React from 'react';
import './Header.css'

function Header() {

    return(
        <>
        <header>
            <div className="header_wrapper" id="header-wrapper">
                <h1 className="title">Skylab Accelerator</h1>
                <button className="log-in_button">LOG IN</button>
            </div>
        </header>
        </>

    )
}

export default Header;