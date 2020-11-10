const http = require('http');

const server = http.createServer((request, response) => {
	response.end('Skylab Mola!');
});

let port = 9000;

server.listen(port, () => {
	console.log(`Server is running in localhost ${port}`);
});
