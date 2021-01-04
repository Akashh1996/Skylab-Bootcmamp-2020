import React, { useState } from 'react';

function ConditionalDisplay(props) {
	const [isVisible, setIsVisible] = useState(props.show);

	return (
		<div>
			<p>
				{isVisible
					? props.children
					: React.createElement('h1', null, 'Clica en el botón...')}
			</p>
			<button
				onClick={() => {
					setIsVisible(!isVisible);
				}}
			>
				Toggle children
			</button>
		</div>
	);
}

export default ConditionalDisplay;
export const x = true;
export const w = false;
