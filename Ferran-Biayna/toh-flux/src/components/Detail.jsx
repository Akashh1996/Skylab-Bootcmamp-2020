import React, { useState, useEffect} from 'react';
import { loadHeroes } from '../actions/action-creators';
import heroStore from '../stores/store';

function DetailHero() {
    const [heroes, setHeroes] = useState(heroStore.getHeroById(11));

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
		setHeroes(heroStore.getHeroById(11))
    }

    return (
		<div class="hero-info">
			<img alt="error" id="hero"/>
			<div class="info">
				<h2 class="detail-heroes-title">Hero - Detail</h2>
				<div class="id">
					<label for="id-text" class="id-label">Id: </label>
					<span id="id-text" class="name-text">{heroes?.id}</span>
				</div>
				<div class="name">
					<label for="name-text" class="id-label">Name: </label>
					<span value="" id="name-text" class="name-text">{heroes?.name}</span>
				</div>
			</div>
		</div>
	);
}

export default DetailHero;