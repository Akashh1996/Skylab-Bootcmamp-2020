import React from 'react';
import './heroDetail.css';

function HeroDetail() {

    let hero = {
        name: 'Magneta',
        id: 15
    }

    return <div class="hero-detail-wrapper">
        <span class="hero-detail-title">{hero.name} details!</span>
        <span class="hero-detail-property">id: {hero.id}</span>
        <span class="hero-detail-property">name: {hero.name}</span>
    </div>
}

export default HeroDetail;