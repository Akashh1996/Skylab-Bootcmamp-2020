import React from 'react';

function BookItem({ title }) {
	function handleClick() {
		const btnElement = document.getElementById(title);
		if (btnElement.innerHTML === 'The adventures of Huckleberry Flinn') {
			btnElement.style.background = 'green';
		} else {
			btnElement.style.background = 'red';
		}
	}

	return (
		<button
			id={title}
			onClick={handleClick}
			type="button"
			class="list-group-item"
		>
			{title}
		</button>
	);
}

export default BookItem;
