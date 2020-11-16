import React from 'react';
import Header from './dashboard/Header';
/* import TopFour from './dashboard/TopFour';
 */ import List from './list/List';

function Toh() {
	let heroes = [
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
	return (
		<>
			<Header />
			<List heroes={heroes} />
			{/* 			<TopFour heroes={heroes} />
			 */}
		</>
	);
}

export default Toh;
