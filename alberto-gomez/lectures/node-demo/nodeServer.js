const http = require('http');

const server = http.createServer((req, res) => {
	res.end('Skylab, el mejor bootcamp del mundo');
});

const port = 5000;
server.listen(port, () => {
	console.log(`Puedes hacer peticiones en el puerto: ${port}`);
});
