import React from 'react';
import '../../TohStyles.css';
import { Link } from 'react-router-dom';
import storeHeroes from '../../stores/hero-store';

function ListItem({ heroId, heroName }) {
	return (
		<div className="list-heroes__btn" alt="heroes">
			<Link to={`/Detail/${heroId}`}>
				<span className="list__heroes-ids">{heroId}</span>
				<button className="list__heroes-names">{heroName}</button>
			</Link>
		</div>
	);
}

export default ListItem;
