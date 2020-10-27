import React from 'react';
import HeroCard from './HeroCard/HeroCard';
import './Dashboard.css';

function Dashboard() {
	let heroes = [
		{
			id: 11,
			name: 'Dr Nice'
		},
		{ id: 12, name: 'Narco' },
		{ id: 13, name: 'Bombasto' },
		{ id: 14, name: 'Celeritas' },
		{ id: 15, name: 'Magneta' },
		{ id: 16, name: 'RubberMan' },
		{ id: 17, name: 'Dynama' },
		{ id: 18, name: 'Dr IQ' },
		{ id: 19, name: 'Magma' },
		{ id: 20, name: 'Tornado' }
	];

	let topHeroes = heroes.slice(0, 4);

	return (
		<div>
			<ul class="top-heroes">
				{topHeroes.map((hero) => (
					<HeroCard hero={hero} />
				))}
			</ul>
		</div>
	);
}

export default Dashboard;
