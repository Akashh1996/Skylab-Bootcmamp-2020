import React from 'react';
import './DashboardList.css';
import { Link } from 'react-router-dom';

function DashboardList({ list }) {
	return (
		<ul id="dashboard-list">
			{list.map((hero) => {
				return (
					<li>
						<Link to={`/heroes/${hero.id}`}>{hero.name}</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default DashboardList;
