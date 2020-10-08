function showDate() {
	document.getElementById('date').innerHTML = Date();
}

function sayHi() {
	let myName = window.prompt('Cuál es tu nombre ?');
	myName = myName.trim();
	if (myName === '') {
		document.getElementById(
			'greeting'
		).innerText = `Que pena no has puesto el nombre :(`;
	} else {
		document.getElementById('greeting').innerText = `Hello, ${myName}`;
	}
}

async function loadData() {
	const response = await fetch('heroes.txt');
	const text = await response.text();
	document.getElementById('data').innerText = text;
}
