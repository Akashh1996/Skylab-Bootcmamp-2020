const http = require('http');
const server = http.createServer((request, response) => {
	response.end('Skylab mola!');
});

server.listen(3000, () => {
	console.log('server is working!');
});
