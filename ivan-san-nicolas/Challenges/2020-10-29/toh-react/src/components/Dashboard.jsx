import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';



function Dashboard() {

	const amount = 4;
	const [heroes, setHeroes] = useState(heroStore.sliceHeroes(amount));

	function handleChange() {
		setHeroes(heroStore.sliceHeroes(amount));
	}

	useEffect(() => {
		heroStore.addEventListener(handleChange);

		if (!heroes || !heroes.length) {
			loadHeroes();
		}

		return () => {heroStore.removeEventListener(handleChange)}
	})

    return (<>
            	{heroes.map((hero) => <p><Link to={`/heroes/:${hero.id}`}>{hero.name}</Link></p>)}
			</>
	)
}

export default Dashboard;