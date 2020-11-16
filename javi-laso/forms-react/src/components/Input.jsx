import React, { useState, useEffect } from 'react';
import store from '../stores/store';

function Input(props) {
	const [inputValue, setInputValue] = useState(props.value);

	useEffect(() => {
		store.addEventListener(handleChange);

		return () => {
			store.removeEventListener(handleChange);
		};
	});

	function handleChange() {
		setInputValue(props.value);
	}

	return (
		<input
			className={props.className}
			type={props.type}
			onChange={(event) => event.target.value}
			value={inputValue ? inputValue : props.value}
			placeholder={props.placeholder}
			required
		/>
	);
}

export default Input;
