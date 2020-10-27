import React from 'react';
import './detail.css';
import Header from '../header/Header';
import HeroDetail from './hero-details/HeroDetail';
import BackButton from './back-button/BackButton';

function Detail() {
    return <section class="detail">
        <Header />
        <HeroDetail />
        <BackButton />
    </section>
}

export default Detail;