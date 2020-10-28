import React, { useState, useEffect } from 'react';

function Input(props) {
	const [value, setValue] = useState(null);

	return (
		<input
			className={props.className}
			type={props.type}
			value={value}
			placeholder={props.placeholder}
			required
		/>
	);
}

export default Input;
