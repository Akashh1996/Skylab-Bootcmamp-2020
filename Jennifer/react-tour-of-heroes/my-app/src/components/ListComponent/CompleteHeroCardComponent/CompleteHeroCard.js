import React from 'react';

function CompleteHeroCard({ hero }) {
	return (
		<li className="content-list">
			{hero.id} - {hero.name}
		</li>
	);
}

export default CompleteHeroCard;
