import React from 'react';
import './Details.css';

function Details({ hero }) {
	return (
		<div className="d-flex flex-column details">
			<h2 className="mb-4">{hero.name} details!</h2>
			<div className="d-flex">
				<div className="d-flex flex-column mr-3">
					<span className="label">id: </span>
					<span className="label">name: </span>
				</div>
				<div className="d-flex flex-column">
					<span className="data">{hero.id}</span>
					<input className="data" value={hero.name} />
				</div>
			</div>
		</div>
	);
}

export default Details;
