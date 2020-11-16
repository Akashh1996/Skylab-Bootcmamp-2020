const https = require('https');

function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			let data = '';
			res.on('data', (partialData) => (data = data + partialData)); //recibe datos a trozos, asi que vamos concatenando
			res.on('end', () => resolve(data)); //cuando termino de recibir datos, resulve la promesa y develveme los datos
			res.on('error', () => reject);
		});
	});
}

/* fetch('https://www.javascript.com/').then((data) => {
	console.log(data);
});
 */

(async function read() {
	const data = await fetch('https://www.javascript.com/');
	console.log(data.length);
})();
