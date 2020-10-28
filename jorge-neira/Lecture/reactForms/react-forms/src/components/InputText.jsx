import React, { useState } from 'react';

function TextInput() {
	const [inputValue, setInputValue] = useState('12');
	const [nameValue, setNameValue] = useState('Narco');

	return (
		<>
			<p>
				id:
				<input
					type="text"
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				></input>
			</p>
			<p>
				name:{' '}
				<input
					type="text"
					value={nameValue}
					onChange={(e) => {
						setNameValue(e.target.value);
					}}
				></input>
			</p>
		</>
	);
}
export default TextInput;
