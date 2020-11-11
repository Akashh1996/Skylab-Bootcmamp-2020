const https = require('https');

function fetch(url) {
	https.get(url, (response) => {
		return new Promise((resolve, reject) => {
			let data = '';
			response.on('data', (partialData) => (data = data + partialData)); //concatenacion de datos recibidos por el navegador, se van recibiendo paquetes de data.
			response.on('end', () => resolve(data)); // resolver promesa cuando ya no quede mas data que enviar.
			response.on('error', () => reject);
		});
	});
}

// fetch('https://www.javascript.com/').then((data) => {
// 	console.log(data.length);
// });

(async function read() {
	const data = await fetch('https://www.javascript.com/');
	console.log(data.length);
})();
