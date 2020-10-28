import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import loadHeroes from '../../actions/hero-actions';
import storeHeroes from '../../stores/hero-store';
import '../TohStyles.css';

function List() {
	const [heroes, setHeroes] = useState[storeHeroes.getHeroes()];

	useEffect(() => {
		storeHeroes.addEventListener(onChange);

		if (!heroes || !heroes.length) {
			loadHeroes();
		}

		storeHeroes.removeEventListener(onChange);
	}, [heroes]);

	function onChange() {}

	return (
		<main>
			<h2 className="list-title">My Heroes</h2>
			<div className="list-heroes">
				{heroes.map((hero) => (
					<ListItem heroId={hero.id} heroName={hero.name} />
				))}
			</div>
		</main>
	);
}

export default List;
