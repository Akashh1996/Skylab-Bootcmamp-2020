import React from 'react';
import './Toggle.css';

function Toggle(props) {
	return (
		<section class="blue-button d-flex">
			<label class="switch">
				<input type="checkbox" checked />
				<span class="slider round"></span>
			</label>
			<label id="viaje-profesional" for="switch">
				Viaje profesional
			</label>
		</section>
	);
}

export default Toggle;
