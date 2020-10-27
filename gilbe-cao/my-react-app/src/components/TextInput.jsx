import React, { useState } from 'react';

function TextInput() {
	const [id, setId] = useState('12');
	const [name, setName] = useState('Narco');
	const [lastname, setLastName] = useState('Traficante');

	function handleChange(event, setValue) {
		setValue(event.target.value);
	}

	return (
		<>
			<p>
				id:
				<input
					type="text"
					value={id}
					onChange={(event) => handleChange(event, setId)}
				/>
			</p>
			<p>
				name:
				<input
					type="text"
					value={name}
					onChange={(event) => handleChange(event, setName)}
				/>
			</p>
			<p>
				name:
				<input
					type="text"
					value={lastname}
					onChange={(event) => handleChange(event, setLastName)}
				/>
			</p>
		</>
	);
}

export default TextInput;
