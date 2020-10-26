import React from 'react';

function BookItem({ title }) {
	return (
		<li
			onClick={function () {
				let mainContent = document.getElementById('main-content');
				debugger;
				if (title === 'The adventures of Huckleberry Finn') {
					mainContent.style.backgroundColor = 'green';
					console.log('correct');
				} else {
					console.log('incorrect');
					mainContent.style.backgroundColor = 'red';
				}
			}}
		>
			{title}
		</li>
	);
}

export default BookItem;
