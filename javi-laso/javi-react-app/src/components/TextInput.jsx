import React, { useState } from 'react';

function TextInput() {
	const [IdValue, setIdValue] = useState('react');
	const [nameValue, setNameValue] = useState('Narco');
	const [lastNameValue, setLastNameValue] = useState('Traficante');

	const handleChange = ({ target: { value } }, setValue) => {
		setValue(value);
	};

	return (
		<>
			<p>
				id:
				<input
					type="text"
					value={IdValue}
					onChange={(event) => {
						handleChange(event, setIdValue);
					}}
				/>
			</p>
			<p>
				name:
				<input
					type="text"
					value={nameValue}
					onChange={(event) => {
						handleChange(event, setNameValue);
					}}
				/>
			</p>
			<p>
				lastname:
				<input
					type="text"
					value={lastNameValue}
					onChange={(event) => {
						handleChange(event, setLastNameValue);
					}}
				/>
			</p>
		</>
	);
}

export default TextInput;
