import React from 'react';

function DashboardHeroList({ hero }) {
	return (
		<li className="listItem">
			<button className="listItem-button">{hero}</button>
		</li>
	);
}

export default DashboardHeroList;
