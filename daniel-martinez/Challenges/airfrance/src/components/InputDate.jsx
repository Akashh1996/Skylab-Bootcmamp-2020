import React, { useState } from 'react';
import Label from './Label';

function InputDate({ label }) {
	const [inputName, setInputName] = useState('');

	function handleChanges({ target: { value } }, setValue) {
		setValue(value);
	}

	return (
		<>
			<div className="blocks">
				<Label text={label} />
				<input
					type="date"
					value={inputName}
					onChange={(event) => handleChanges(event, setInputName)}
				></input>
			</div>
		</>
	);
}

export default InputDate;
