import React from 'react';

function HeroesDashItem({ heroesSlice }) {
	return (
		<div className="dash__heroes">
			<div className="dash__button">{heroesSlice.name}</div>
		</div>
	);
}

export default HeroesDashItem;
