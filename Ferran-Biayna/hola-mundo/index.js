function showDate() {
	document.getElementById('demo').innerHTML = Date();
}

function sayHi() {
	let name = prompt('Escribe tu nombre');
	if (name === '') {
		sayHi();
	} else {
		document.getElementById('saludo').innerHTML = `Hola ${name}!`;
	}
}


async function loadData() {
	const response = await fetch('heroes.txt');
	const text = await response.text();
	document.getElementById('data').innerText = text;
}
