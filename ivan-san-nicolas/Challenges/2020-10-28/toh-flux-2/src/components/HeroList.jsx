import React, { useState, useEffect } from 'react';
import {loadHeroes} from '../actions/hero-actions';
import heroStore from '../stores/hero-store';

function HeroList(props) {

    const [heroes, setHeroes] = useState(heroStore.getHeroes());

    useEffect(() => {
        heroStore.addEventListener(handleChange)
        if (heroes.length === 0) {
            loadHeroes();
        }

    }, [heroes]);

    function handleChange() {
        setHeroes(heroStore.getHeroes())
    }
    return (<>
            {(!heroes || !heroes.length) && <h1>There's no heroes!</h1>}
        {(heroes && heroes.length) && heroes.map((hero) => <li>{hero.name}</li>)}
            </>
        )

}

export default HeroList;