import React from 'react';

function Button({ id, innerText, event }) {
	return (
		<button id={id} onClick={() => event()}>
			{innerText}
		</button>
	);
}

export default Button;
