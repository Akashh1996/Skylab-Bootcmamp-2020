import React from 'react';
import './listHero.css'

function CreateHeroList({heroName, heroId}) {
	return (
		<li className="list-heroes">
			<button className="heroes-button"><span className="list-hero-id">{heroId}</span><span className="list-hero-name">{heroName}</span></button>
		</li>
	);
}

export default CreateHeroList;
