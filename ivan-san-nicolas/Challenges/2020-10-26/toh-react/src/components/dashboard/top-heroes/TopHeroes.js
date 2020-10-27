import React from 'react';
import TopHeroesItem from './top-heroes-item/TopHeroesItem'
import './topHeroes.css';

function TopHeroes() {
    
    const heroes = ['Narco', 'Bombasto', 'Celeritas', 'Magneta'];

    return <div class="top-heroes-container">
        <span>Top Heroes</span>
        <ul class="top-heroes-row">
            {
                heroes.map((hero) => 
                    <TopHeroesItem heroes={hero} class="hero-item" />
                )
            }
        </ul>
    </div>
}

export default TopHeroes;