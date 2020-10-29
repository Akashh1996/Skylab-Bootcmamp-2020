import React from 'react';
import '../../TohStyles.css';

function ListItem({ heroId, heroName }) {
	return (
		<div className="list-heroes__btn" alt="heroes">
			<span className="list__heroes-ids">{heroId}</span>
			<button className="list__heroes-names">{heroName}</button>
		</div>
	);
}

export default ListItem;
