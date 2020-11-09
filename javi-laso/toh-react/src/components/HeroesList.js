import React, { useState } from 'react';
import './HeroesList.css';
import ListElement from './ListElement';

const addHero = (newHero) => {};

function HeroesList({ list }) {
	const [newHero, setNewHero] = useState('');
	return (
		<>
			<input
				placeholder="Enter new hero name"
				onChange={(event) => {
					setNewHero(event.target.value);
				}}
				value={newHero}
			/>
			<button
				type="button"
				onClick={() => {
					addHero(newHero);
				}}
			>
				Add Hero
			</button>
			<div class="margin35"></div>
			<ul id="heroes-list">
				{list?.map((element) => {
					return <ListElement id={element.id} name={element.name} />;
				})}
			</ul>
		</>
	);
}

export default HeroesList;
