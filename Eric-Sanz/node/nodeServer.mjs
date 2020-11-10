import http from 'http';

const server = http.createServer((request, response) => {
	response.end('Skylab Mola!');
});

const port = process.env.PORT || 9000; // --> dandole el valor a port antes de ejecutar el archivo PORT=8900 node nodeServer.js

server.listen(port, () => {
	console.log(`Server is running in localhost ${port}`);
});
