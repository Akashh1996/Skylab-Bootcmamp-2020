import React from 'react';
import DropDown from '../dropdown/dropdown';

function FirstDivContent() {
	const trip = ['Ida y vuelta', 'Sólo ida', 'Multiples destinos'];
	const passenger = ['Bebé', 'Niño', 'Joven', 'Adulto', 'Senior'];
	const flightClass = ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE'];

	return (
		<div class="first-row">
			<div>
				<label>Viaje: </label>
				<DropDown options={trip} />
			</div>
			<div>
				<label>Pasajeros: </label>
				<DropDown options={passenger} />
			</div>
			<div>
				<label>Clase: </label>
				<DropDown options={flightClass} />
			</div>
		</div>
	);
}

export default FirstDivContent;
