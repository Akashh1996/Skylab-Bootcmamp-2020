import React, { useState } from 'react';
import Label from './Label';

function InputText({ label }) {
	const [inputName, setInputName] = useState('');

	function handleChanges({ target: { value } }, setValue) {
		setValue(value);
	}

	return (
		<>
			<div className="blocks">
				<Label text={label} />
				<input
					type="text"
					value={inputName}
					onChange={(event) => handleChanges(event, setInputName)}
				></input>
			</div>
		</>
	);
}

export default InputText;
