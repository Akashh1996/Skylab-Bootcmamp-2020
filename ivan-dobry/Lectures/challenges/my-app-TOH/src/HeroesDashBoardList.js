import React from 'react';
import HeroesDashItem from './HeroesDashItem';

function HeroesDashBoardList({ heroesSlice }) {
	return (
		<div className="dashboard__main">
			{heroesSlice.map((heroesSlice) => (
				<HeroesDashItem heroesSlice={heroesSlice} />
			))}
		</div>
	);
}

export default HeroesDashBoardList;
