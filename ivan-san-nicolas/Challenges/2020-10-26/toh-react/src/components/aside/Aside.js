import React from 'react';
import './aside.css';
import Header from '../header/Header';
import AsideList from './aside-list/AsideList';

function Aside () {
    return <div class="aside">
        <Header />
        <AsideList/>
    </div>
}

export default Aside;