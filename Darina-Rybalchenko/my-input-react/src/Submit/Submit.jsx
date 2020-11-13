import React, { useState } from 'react';
import './../Submit/Submit.css';

function Submit({ labelName }) {
	const [valueInput, setValueInput] = useState('Search Flights');

	function handleChange(event) {
		setValueInput(event.target.value);
	}

	return (
		<>
			<label>{labelName}</label>
			<input
				className="submit-button"
				type="submit"
				value={valueInput}
				onChange={handleChange}
			/>
		</>
	);
}

export default Submit;
