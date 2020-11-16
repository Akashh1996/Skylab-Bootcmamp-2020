import React from 'react';

function TopFour({ heroes }) {
	return (
		<>
			<h2>Top Heroes</h2>
			{heroes.slice(0, 4).map((hero) => {
				return <div>{hero.name}</div>;
			})}
		</>
	);
}

export default TopFour;
