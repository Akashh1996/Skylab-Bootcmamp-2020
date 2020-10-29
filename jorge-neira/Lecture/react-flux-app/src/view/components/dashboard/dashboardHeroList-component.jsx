import React from 'react';
import { Link } from 'react-router-dom';

function DashboardHeroList() {
	return (
		<li className="listItem">
			<Link to="/heroes/detail">
				<button className="listItem-button">pruebas</button>
			</Link>
		</li>
	);
}

export default DashboardHeroList;
