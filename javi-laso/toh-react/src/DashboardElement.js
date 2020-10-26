import React from 'react';
import './DashboardElement.css';

function DashboardElement({ name }) {
	return (
		<li>
			<a>{name}</a>
		</li>
	);
}

export default DashboardElement;
