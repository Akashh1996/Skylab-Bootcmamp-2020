import React from 'react';
import './ListComponent.css';
import CompleteHeroCard from './CompleteHeroCardComponent/CompleteHeroCard';

function ListComponent() {
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

	return (
		<div id="content">

			<div id="list-heroes">
				<h2>My heroes</h2>
				<ul id="list">
					{heroes.map((hero) => (
						<CompleteHeroCard hero={hero} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default ListComponent;
