import React from 'react';
import ListItem from '././ListItem.js';
import IdItem from './IdItem.js';

function List({ _heroes }) {
	return (
		<div class="hero-info">
			<img id="hero"/>
			<div class="info">
				<h2 class="detail-heroes-title">Hero - Detail</h2>
				<div class="id">
					<label for="id-text" class="id-label">Id: </label>
					<span id="id-text" class="name-text">{_heroes.map((hero) => <IdItem heroId={hero.id}/>)}</span>
				</div>
				<div class="name">
					<label for="name-text" class="id-label">Name: </label>
					<span value="" id="name-text" class="name-text">{_heroes.map((hero) => <ListItem heroName={hero.name}/>)}</span>
				</div>
			</div>
		</div>
	);
}

export default List;
