import React from 'react';
import HeroesItem from './HeroesItem';

function HeroesList({ superHeroes }) {
	return (
		<ul>
			{superHeroes.map((hero) => (
				<HeroesItem heroName={hero.name} />
			))}
		</ul>
	);
}

export default HeroesList;
