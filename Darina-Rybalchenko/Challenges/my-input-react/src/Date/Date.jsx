import React, { useState } from 'react';
import './../Date/Date.css';

function Date({ labelName }) {
	const [valueInput, setValueInput] = useState('');

	function handleChange(event) {
		setValueInput(event.target.value);
	}

	return (
		<>
			<label>{labelName}</label>
			<input
				className="date"
				type="date"
				value={valueInput}
				onChange={handleChange}
			/>
		</>
	);
}

export default Date;
