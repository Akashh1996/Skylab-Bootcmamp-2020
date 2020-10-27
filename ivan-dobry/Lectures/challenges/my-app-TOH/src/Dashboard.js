import React from 'react';
import HeroesDashBoardList from './HeroesDashBoardList';

function DashBoard() {
	const heroes = [
		{ id: 11, name: 'Dr Nice' },
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

	const heroesSlice = heroes.slice(1, 5);

	return (
		<div className="main__content">
			<h2 className="dash__title">Top Heroes</h2>
			<HeroesDashBoardList heroesSlice={heroesSlice} />
		</div>
	);
}

export default DashBoard;
