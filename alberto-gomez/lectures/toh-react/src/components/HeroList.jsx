import React, { useEffect, useState } from 'react';

function HeroList(props) {
	const [heroes, setHeroes] = useState();

	useEffect(() => {
		if (!heroes) {
			loadHeroes();
		}
	}, [heroes]);
	return (
		<ul>
			{heroes.map((hero) => (
				<li>{hero.name}</li>
			))}
		</ul>
	);
}

export default HeroList;
