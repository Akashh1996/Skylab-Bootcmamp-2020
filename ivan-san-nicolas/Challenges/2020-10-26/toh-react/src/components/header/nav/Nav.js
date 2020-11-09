import React from 'react';
import './nav.css';
import DashboardButton from './dashboard-button/DashboardButton';
import HeroesButton from './heroes-button/HeroesButton';

function Nav() {
    return <nav class="header__nav">
        <DashboardButton/>
        <HeroesButton/>
    </nav>
}

export default Nav;