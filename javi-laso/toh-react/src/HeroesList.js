import React from 'react';
import './HeroesList.css';
import ListElement from './ListElement';

function HeroesList({ list }) {
	return (
		<ul id="heroes-list">
			{list.map((element) => {
				return <ListElement id={element.id} name={element.name} />;
			})}
		</ul>
	);
}

export default HeroesList;
