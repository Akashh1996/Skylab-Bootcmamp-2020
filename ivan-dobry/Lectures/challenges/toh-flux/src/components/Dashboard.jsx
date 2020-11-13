import React, { useEffect, useState } from 'react';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';
import { Link } from 'react-router-dom';


function Dashboard() {

    const [heroes, setHeroes] = useState(heroStore.getHeroes());

	useEffect(() => {
		heroStore.addEventListener(handleChange);
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
    
    let topHeroes = heroStore.getTopHeroes()
    return (
        <>
        <h1>Tour of heroes</h1>
        {topHeroes.map((hero) => (
            <li>
                <Link to={`/heroes/${hero.id}`}>
						{hero.name}
				</Link>
            </li>
        ))
        }

        </>
    )


}

export default Dashboard