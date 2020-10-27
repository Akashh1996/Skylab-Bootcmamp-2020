import React, { useState } from 'react';

function InputText() {
	const [id, setId] = useState('12');
	const [name, setName] = useState('Narco');

	function handleChange({ target: { value } }, setValue) {
		setValue(value);
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
		</>
	);
}

export default InputText;
