import React, { useState } from 'react';
import DateInput from './DateInput';
import SwitchInput from './SwitchInput';

function TextInput({ flight }) {
	const [departure, setDeparture] = useState('');
	const [arrival, setArrival] = useState('');
	const [fullName, setFullName] = useState('');

	function handleChange({ target: { value } }, setValue) {
		setValue(value);
	}

	return (
		<>
			<div className="text-input">
				<input
					type="text"
					placeholder="Salida de *"
					value={
						departure
							? departure
							: flight?.departure
							? flight.departure
							: departure
					}
					required
					onChange={(event) => handleChange(event, setDeparture)}
				/>
				<input
					type="text"
					placeholder="Llegada a *"
					value={
						arrival && !flight
							? arrival
							: flight?.arrival
							? flight.arrival
							: arrival
					}
					required
					onChange={(event) => handleChange(event, setArrival)}
				/>
			</div>
			<DateInput />
			<SwitchInput />
			<div>
				<input
					type="text"
					placeholder="Nombre y apellidos *"
					value={fullName}
					onChange={(event) => handleChange(event, setFullName)}
				/>
			</div>
		</>
	);
}

export default TextInput;
