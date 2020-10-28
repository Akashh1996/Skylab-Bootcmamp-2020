import React from 'react';
import HeroesItem from './HeroesItem';

function TopHeroes({ superHeroes }) {
	const topHeroes = superHeroes.slice(1, 5);
	return (
		<ul>
			{topHeroes.map((hero) => (
				<HeroesItem heroName={hero.name} />
			))}
		</ul>
	);
}

export default TopHeroes;
