import React from 'react';

function BookItem({ title }) {
	function click() {
		if (title === 'The adventures of Huckleberry Finn') {
			document.getElementById('main').style.backgroundColor = 'green';
			document.getElementById('button').style.display = 'flex';
		} else {
			console.log('fallo');
			document.getElementById('main').style.backgroundColor = 'red';
		}
	}
	return (
		<li className="list" onClick={click}>
			{title}
		</li>
	);
}

export default BookItem;
