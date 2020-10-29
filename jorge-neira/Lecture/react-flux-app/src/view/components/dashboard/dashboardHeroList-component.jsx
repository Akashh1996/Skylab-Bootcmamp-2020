import React from 'react';
import { Link } from 'react-router-dom';

function DashboardHeroList({ hero }) {
	debugger;
	return (
		<li className="listItem">
			<Link to="/heroes/detail">
				<button className="listItem-button">{hero}</button>
			</Link>
		</li>
	);
}

export default DashboardHeroList;
