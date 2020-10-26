import React from 'react';

function BookItem({ tittle }) {
	function click() {
		if (tittle === 'The adventures of Hurckleberry Finn') {
			document.getElementById('main').style.backgroundColor = 'green';
			document.getElementById('button').style.display = 'flex';
		} else {
			document.getElementById('main').style.backgroundColor = 'red';
			document.getElementById('button').style.display = 'none';
		}
	}
	return <li onClick={click}>{tittle}</li>;
}

export default BookItem;
