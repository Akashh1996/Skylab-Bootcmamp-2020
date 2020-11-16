import React, { useState, useEffect } from 'react';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from '../stores/heroStore';

function HeroList(props) {
    const [heroes, setHeroes] = useState(heroStore.getHeroes());

    useEffect(() => {
        heroStore.addEventListener(handleChange);
        if (!heroes || !heroes.length) {
            loadHeroes();
        }
    });

    function handleChange() {
        setHeroes(heroStore.getHeroes());
    }
    return (<>
        {(!heroes || !heroes.length) && <h1>No hay Heroes!</h1>}
        {(heroes && heroes.length > 0) && heroes.map(hero => <li>{hero.name}</li>)}
        </>
    );
}

export default HeroList;
