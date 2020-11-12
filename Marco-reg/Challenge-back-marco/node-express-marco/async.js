const https = require('https');

function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			let data = '';
			res.on('data', (partialData) => console.log(partialData));
		});
	});
}
(async function read() {
	const data = await fetch('https://www.npmjs.com/');
	console.log(data.length);
})();
