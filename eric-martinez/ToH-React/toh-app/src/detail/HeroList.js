import React from 'react';
import HeroItem from './HeroItem';

function HeroList({ superHeroes }) {
	function getId(superHeroes) {
		const heroId = superHeroes.find((hero) => hero.id === 11);
		return heroId;
	}

	const onlyHero = getId(superHeroes);

	return (
		<ul>
			<HeroItem propsHeroId={onlyHero.name} />
		</ul>
	);
}

export default HeroList;
