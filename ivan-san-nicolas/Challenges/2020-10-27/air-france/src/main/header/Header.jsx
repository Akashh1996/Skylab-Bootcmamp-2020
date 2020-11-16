import React from 'react';
import './header.css';
import ReserveFlightButton from './reserve-flight-button/ReserveFlightButton';
import ReserveMilesButton from './reserve-miles-button/ReserveMilesButton';

function Header() {
    return (
        <header class="header">
            <ReserveFlightButton />
            <ReserveMilesButton/>
        </header>
    )
}

export default Header;