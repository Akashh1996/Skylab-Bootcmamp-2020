import React from 'react';
import './DashboardList.css';
import DashboardElement from './DashboardElement';

function DashboardList({ list }) {
	return (
		<ul id="dashboard-list">
			{list.map((element) => {
				return <DashboardElement name={element.name} />;
			})}
		</ul>
	);
}

export default DashboardList;
