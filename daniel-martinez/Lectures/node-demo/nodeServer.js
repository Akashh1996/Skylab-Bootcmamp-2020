const http = require('http');

const server = http.createServer((req, res) => {
	res.end('Skylab mola un huevo');
});

server.listen(3000, () => {
	console.log('Server is running...');
});
