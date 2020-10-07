function sayHi() {
	let name = prompt('Como te llamas??');
	if (name === '') document.getElementById('hello').innerText = `Saludos!`;
	else document.getElementById('hello').innerHTML = `Saludos ${name.trim()}!`;
}

function loadData() {
	const data = fetch('heroes.txt').then((response) => {
		const text = response.text().then((value) => {
			document.getElementById('result').innerText = value;
		});
	});
}

async function loadData() {
	const response = await fetch('heroes.txt');
	const text = await response.text();
	document.getElementById('result').innerText = text;
}
