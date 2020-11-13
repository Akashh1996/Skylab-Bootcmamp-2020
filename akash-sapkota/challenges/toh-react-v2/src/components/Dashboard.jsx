import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';

function Dashboard() {
    const [topHeroes, setTopHeroes] = useState(heroStore.getTopHeroes());
    useEffect(() => {
        heroStore.addEventListener(handleChange);
        if (!topHeroes || !topHeroes.length) {
            loadHeroes();

        }

        return () => {
            heroStore.removeEventListener(handleChange);
        };
    }, [topHeroes]);

    function handleChange() {
        setTopHeroes(heroStore.getTopHeroes());
    }

    return (
        <>
            {topHeroes &&
                topHeroes.length > 0 &&
                topHeroes.map((hero) => (
                    <li key={hero.id}>
                        <Link to={`/heroes/${hero.id}`}>{hero.name}</Link>

                    </li>
                ))}
        </>
    );
}

export default Dashboard