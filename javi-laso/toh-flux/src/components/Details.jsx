import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import heroStore from '../stores/hero-store';
import PowerStatCircle from './PowerStatCircle';
// import PowerStatCircle from './PowerStatCircle';

function Details() {
	const { id } = useParams();
	const hero = heroStore.getHeroById(+id);
	return (
		<div className="d-flex flex-column details">
			<h2 className="mb-4">{hero.name} details!</h2>
			<div className="d-flex mb-4">
				<div className="d-flex flex-column mr-3">
					<span className="label">id: </span>
					<span className="label">name: </span>
				</div>
				<div className="d-flex flex-column">
					<span className="data">{hero.id}</span>
					<input className="data" value={hero.name} readOnly />
				</div>
			</div>
			<div className="powerstats-container d-flex">
				{Object.entries(hero.powerstats).map((element) => {
					return <PowerStatCircle powerstat={element} />;
				})}
			</div>
		</div>
	);
}

export default Details;
