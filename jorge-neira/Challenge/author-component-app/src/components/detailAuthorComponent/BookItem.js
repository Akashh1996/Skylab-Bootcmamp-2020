import React from 'react';

function BookItem({ props }) {
	return (
		<div
			onClick={() => {
				if (props.title === 'The adventures of Huckelberry Finn') {
					document.getElementById('change-color').style.backgroundColor =
						'green';
				} else {
					document.getElementById('change-color').style.backgroundColor = 'red';
				}
			}}
			class="list-item"
		>
			{props.title}
		</div>
	);
}

export default BookItem;
