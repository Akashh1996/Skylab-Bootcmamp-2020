function showDate() {
	document.getElementById('demo').innerHTML = Date();
}

function sayHi() {
	//Hello, Gilbe
	var name = prompt('Bienvenido! Por favor, introduce tu nombre: ');

	document.getElementById('greeting').innerHTML = `¡Hello ${name}!`;
}

async function loadData() {
	const response = await fetch('heroes.txt');
	const text = await response.text();
	document.getElementById('data').innerText = text;
}
