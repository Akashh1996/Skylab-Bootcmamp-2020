import React, { useEffect } from 'react';
import store from '../stores/hero-store';
import './PowerStatCircle.css';

function PowerStatCircle({ powerstat }) {
	useEffect(() => {
		let circle = document.getElementById(powerstat[0]);
		store.setDashParamsInCircle(circle, powerstat[1]);
	});

	return (
		<div className="powerstats d-flex flex-column">
			<svg height="100" width="100">
				<circle cx="50" cy="50" r="37"></circle>
				<circle
					id={powerstat[0]}
					className="circle"
					cx="50"
					cy="50"
					r="37"
				></circle>
			</svg>
			<span className="powerstats__name text-capitalize">{powerstat[0]}</span>
			<span className="powerstats__number">{powerstat[1]}</span>
		</div>
	);
}

export default PowerStatCircle;
