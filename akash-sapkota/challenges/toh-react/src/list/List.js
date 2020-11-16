import React from 'react';

function List({ heroes }) {
	return (
		<>
			{heroes.map((hero) => {
				return <div>{hero.name}</div>;
			})}
		</>
	);
}

export default List;
