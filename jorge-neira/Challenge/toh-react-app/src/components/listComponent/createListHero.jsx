import React from 'react';

function CreateHeroList({ heroes }) {
	return (
		<li className="list-heroes">
			<button className="heroes-button">{heroes}</button>
		</li>
	);
}

export default CreateHeroList;
