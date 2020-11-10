
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroStore, { HeroStore } from '../stores/hero-store'
import { loadHeroes } from '../actions/hero-actions';


const AMOUNT = 4;

function Dashboard() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!heroes || !heroes.length) {
			loadHeroes();
		}

		return () => {
			heroStore.removeEventListener(handleChange);
		};
	});

	function handleChange() {
		setHeroes(HeroStore.sliceHeroes(AMOUNT));
	}

    return (
        <>
            <ul>
                {heroes.map((hero) => <li><Link to={`/heroes/${hero.id}`}>{hero.name}</Link></li>)}
            </ul>
        </>
    );
}

export default Dashboard;
