import React from 'react';
import './DashboardElement.css';

function DashboardElement({ name }) {
	return (
		<li>
			<a href="#">{name}</a>
		</li>
	);
}

export default DashboardElement;
