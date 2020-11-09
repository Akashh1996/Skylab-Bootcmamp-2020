import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

function DashboardTopHero({ heroName, heroId }) {
	return (
		<Link class="top-heroes-buttons" to={`/heroes/${heroId}`}>
			{heroName}
		</Link>
	);
}

export default DashboardTopHero;
