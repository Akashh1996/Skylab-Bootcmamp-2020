import React, { useEffect, useState } from 'react';
import heroStore from '../stores/hero-store';
import { loadHeroById } from '../actions/hero-actions';

function HeroDetails(props) {
	// destructuring
	const [heroId, setHeroId] = useState(props.match.params.heroId);
	const [hero] = useState(null);

	function handleChange() {
		setHeroId(heroStore.getHeroes());
	}

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (heroId && !hero) {
			loadHeroById();
		}

		return () => heroStore.removeEventListener(handleChange);
	});

	return <h1>Narco details</h1>;
}

export default HeroDetails;
