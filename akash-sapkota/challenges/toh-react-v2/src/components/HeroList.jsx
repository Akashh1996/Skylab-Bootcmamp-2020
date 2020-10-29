import React, { useEffect, useState } from 'react';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';

function HeroList(props) {
    const [heroes, setHeroes] = useState(heroStore.getHeroes());

    useEffect(() => {
        heroStore.addEventListener(handleChange);
        debugger
        if (!heroes || !heroes.length) {
            loadHeroes();
        }

        return () => {
            heroStore.removeEventListener(handleChange);
        };
    }, [heroes]);

    function handleChange() {
        setHeroes(heroStore.getHeroes());
    }

    return (
        <>
            {heroes &&
                heroes.length > 0 &&
                heroes.map((hero) => (
                    <li key={hero.id}>
                        {hero.name} <button>x</button>
                    </li>
                ))}
        </>
    );
}

export default HeroList;
