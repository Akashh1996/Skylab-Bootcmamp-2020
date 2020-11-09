import React from 'react';
import './asideList.css';
import TopHeroesList from './top-heroes-list/TopHeroesItem';

function AsideList() {

    let heroes = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
];

    return <section class="aside-list-wrapper">
        <span class="aside-list__title">my heroes</span>
        <ul class="aside-list-heroes">
            {
                heroes.map((hero) => 
                    <TopHeroesList heroes={hero} class="hero-list-item"/>
                )
            }
        </ul>
    </section>
}

export default AsideList;