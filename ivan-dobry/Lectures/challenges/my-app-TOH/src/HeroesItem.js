import React from 'react';

function HeroesItem({ heroes }) {
	return (
		<div className="hero">
			<div className="hero__id">{heroes.id}</div>
			<div className="hero__name">{heroes.name}</div>
		</div>
	);
}

export default HeroesItem;
