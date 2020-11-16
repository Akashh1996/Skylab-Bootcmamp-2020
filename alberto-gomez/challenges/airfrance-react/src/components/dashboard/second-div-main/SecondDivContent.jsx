import React from 'react';
import DropDown from '../dropdown/dropdown';

const airports = [
	'BCN - Aeropuerto de Josep Tarradellas-El Prat',
	'JFK - International Airport John F. Kennedy'
];

function SecondDivContent() {
	return (
		<div class="second-row">
			<label>Salida de</label>
			<DropDown options={airports} />
			<label>Llegada a</label>
			<DropDown options={airports} />
		</div>
	);
}

export default SecondDivContent;
