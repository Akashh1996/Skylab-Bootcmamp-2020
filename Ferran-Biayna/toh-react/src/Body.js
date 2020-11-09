import React from 'react';
import Header from './Header.js';
import List from './list/List';

let _heroes = [
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

function Body() {
	debugger;
	return (
		<div>
			<Header />
			<List _heroes={_heroes} />
		</div>
	);
}

export default Body;
