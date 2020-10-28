import React, { useState } from 'react';
import './../TextInput/TextInput.css';

function TextInput({ labelName }) {
	const [valueInput, setValueInput] = useState('');

	function handleChange(event) {
		setValueInput(event.target.value);
	}

	return (
		<>
			<label className="text-input-label">{labelName}</label>
			<input value={valueInput} onChange={handleChange} required />
		</>
	);
}

export default TextInput;
