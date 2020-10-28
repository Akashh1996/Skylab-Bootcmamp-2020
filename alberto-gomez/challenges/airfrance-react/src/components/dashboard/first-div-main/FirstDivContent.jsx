import React, { useEffect, useState } from 'react';
import DropDown from '../dropdown/dropdown';
import airfranceStore from '../../../stores/airfrance-store';
import '../../../actions/action-creators';
import { loadFlightOptions } from '../../../actions/action-creators';

function FirstDivContent() {
	// VARIABLES DE ESTADO
	const [flightOptions, setFlightOptions] = useState(
		airfranceStore.getFlightOptions()
	);

	// USEEFFECT FUNCTION
	useEffect(() => {
		airfranceStore.addEventListener(handleChange);
		loadFlightOptions();

		return () => {
			airfranceStore.removeEventListener(handleChange);
		};
	}, [flightOptions]);

	function handleChange() {
		debugger;
		setFlightOptions(airfranceStore.getFlightOptions());
	}

	return (
		<div class="first-row">
			<div>
				<label>Viaje: </label>
				<DropDown options={flightOptions.trip} />
			</div>
			<div>
				<label>Pasajeros: </label>
				<DropDown options={flightOptions.passenger} />
			</div>
			<div>
				<label>Clase: </label>
				<DropDown options={flightOptions.flightClass} />
			</div>
		</div>
	);
}

export default FirstDivContent;
