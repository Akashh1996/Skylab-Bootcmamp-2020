import React from 'react';
import TopHeroes from './TopHeroes';

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

function Dashboard() {
	return (
		<>
			<header>
				<h1>Tour of Heroes</h1>
				<button>Dashboard</button>
				<button>List</button>
			</header>
			<main>
				<h3>Top Heroes</h3>
				<TopHeroes heroName={heroes.map((element) => element.name)} />
			</main>
		</>
	);
}

export default Dashboard;
