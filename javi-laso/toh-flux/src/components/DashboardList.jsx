import React from 'react';
import { loadHeroes } from '../actions/hero-actions';
import './DashboardList.css';
import { Link } from 'react-router-dom';

function DashboardList({ list }) {
	return (
		<>
			<ul id="dashboard-list">
				{list?.map((hero) => {
					return (
						<li>
							<Link to={`/heroes/${hero.id}`} className="dashboard-link">
								{hero.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<button
				className="recharge"
				onClick={() => {
					loadHeroes();
				}}
			>
				Recharge List
			</button>
		</>
	);
}

export default DashboardList;
