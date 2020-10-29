import React, { useState, useEffect } from 'react';
import {loadHeroes, deleteHero} from '../../actions/hero-actions';
import heroStore from '../stores/hero-store';

function HeroList() {
    const [heroes, setHeroes] = useState();

    useEffect(() => {
        heroStore.addEventListener(handleChange)
        if (!heroes || !heroes.length) {
            loadHeroes();
        }
    }, [heroes]);

    function handleChange() {
        setHeroes(heroStore.getHeroes())
    }

    return (    <>
                {(!heroes || !heroes.length) && <h1>There's no heroes :/</h1>}
                {(heroes && heroes.length) && heroes.map((hero) => 
                    <>
                        <li>{hero.name} ------ <button onClick={() => deleteHero(hero.id)}>X</button></li>
                    </>
                )}
            </>

    )
}

export default HeroList;