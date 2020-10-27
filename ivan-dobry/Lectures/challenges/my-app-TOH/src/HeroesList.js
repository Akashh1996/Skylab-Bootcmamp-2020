import React from 'react';
import HeroesItem from './HeroesItem';

function HeroesList({ heroes }) {
	return (
		<div className="heroes__list">
			{heroes.map((heroes) => (
				<HeroesItem heroes={heroes} />
			))}
		</div>
	);
}

export default HeroesList;
