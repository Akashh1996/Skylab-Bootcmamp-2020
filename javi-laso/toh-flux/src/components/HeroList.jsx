import React, { useEffect, useState } from 'react';
import { loadHeroes } from '../actions/hero-actions';
import './HeroList.css';
import ListElement from './ListElement';
import heroStore from '../stores/hero-store';

function HeroList() {
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

	return (
		<>
			<h2 className="mb-4">Heroes List</h2>
			<ul id="heroes-list">
				{heroes.map((hero) => {
					return <ListElement id={hero.id} name={hero.name} />;
				})}
			</ul>
		</>
	);
}

export default HeroList;
