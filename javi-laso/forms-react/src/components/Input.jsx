import React from 'react';

function Input(props) {
	return (
		<input
			className={props.className}
			type={props.type}
			value={props.value}
			placeholder={props.placeholder}
			required
		/>
	);
}

export default Input;
