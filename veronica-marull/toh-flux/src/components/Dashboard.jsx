import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { loadHeroes } from '../actions/hero-actions';
import heroStore, { HeroStore } from '../stores/hero-store';

const amount = 4;

function Dashboard() {
    const [heroes, setHeroes] = useState([]); 

    function handleChange() {
        setHeroes(HeroStore.sliceHeroes(amount));
    }

    useEffect(() => {
        heroStore.addEventListener(handleChange);

        if(!heroes || !heroes.length) {
            loadHeroes();
        }
        return () => { heroStore.removeEventListener(handleChange);}
    });

    return (
        <>
            <ul>
                {heroes.map((hero) => <Link to={`/heroes/${hero.id}`}>{hero.name}</Link>)}
            </ul>

        </>
    )
}

export default Dashboard 