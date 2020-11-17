import React from 'react';
import HeroItem from './HeroItem';

function TopHeroes({ heroName }) {
	return (
		<ul>
			{heroName.slice(1, 5).map((heroitem) => (
				<HeroItem heroitem={heroitem} />
			))}
		</ul>
	);
}

export default TopHeroes;
