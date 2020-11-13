import React from 'react';
import './Toggle.css';

function Toggle(props) {
	return (
		<section className="blue-button d-flex">
			<label className="switch">
				<input type="checkbox" checked />
				<span className="slider round"></span>
			</label>
			<label id="viaje-profesional" htmlFor="switch">
				Viaje profesional
			</label>
		</section>
	);
}

export default Toggle;
