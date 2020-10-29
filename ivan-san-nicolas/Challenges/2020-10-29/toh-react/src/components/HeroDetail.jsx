import React from 'react';

const hero = {
    id: 12,
    name: 'Narco',
    lastname: 'Traficante',
    superpower: 'Sell drugs'
}

function HeroDetail() {

    return <>
        <h1>Hero Details</h1>
        <p>Id: {hero.id}</p>
        <p>Name {hero.name}</p>
        <p>Lastname: {hero.lastname}</p>
        <p>Super Power: {hero.superpower}</p>
        </>
}

export default HeroDetail;